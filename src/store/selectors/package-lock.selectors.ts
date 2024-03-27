import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { PackageJSON } from 'query-registry';
import { PackageLockState } from '@/store/slices/package-lock.slice';
import { isCompatibleWithMainDepVersion } from '@/utils/packages';
import mainDependencySelectors from '@/store/selectors/main-dependency.selectors';

const selectFile = ({ packageLock }: RootState): PackageLockState | null => packageLock;

// prettier-ignore
const selectDependencies = createSelector(selectFile, (packageLock): PackageJSON[] => {
  if (!packageLock) {
    return [];
  }

  // Get my/current package and extract my direct dependencies/devDependencies/engines
  const currentPackage = packageLock.packages[''];
  const currentDependencyNames = [
    ...Object.keys(currentPackage.dependencies || {}),
    ...Object.keys(currentPackage.devDependencies || {}),
  ];
  const currentEngines = Object.entries(currentPackage.engines || {})
    .map(([name, version]) => ({ name, version }));

  return (Object.entries(packageLock.packages) as [string, PackageJSON][])
    // Remove current package
    .filter(([key]) => !!key)
    // Map to PackageJSON objects
    .map(([key, value]) => ({
      ...value,
      name: key.replace('node_modules/', ''),
    }))
    // Keep only direct dependencies
    .filter(({ name }) => currentDependencyNames.includes(name))
    // Add current engines
    .concat(currentEngines);
});

const selectOnlyPlugins = createSelector(
  [selectDependencies, mainDependencySelectors.selectDependency],
  (dependencies, mainDep): PackageJSON[] =>
    dependencies.filter((dep) => dep?.peerDependencies?.[mainDep || ''] || dep?.engines?.[mainDep || '']),
);

// prettier-ignore
const selectPluginNames = createSelector(selectOnlyPlugins, (plugins): string[] =>
  plugins.map((dep) => dep.name),
);

const selectVersionSelectedArg = (_: any, versionSelected: string) => versionSelected;

const selectIncompatiblePlugins = createSelector(
  [mainDependencySelectors.selectDependency, selectOnlyPlugins, selectVersionSelectedArg],
  (mainDependency, plugins, versionSelected): PackageJSON[] =>
    plugins.filter((plugin) => !isCompatibleWithMainDepVersion(mainDependency, plugin, versionSelected)),
);

const selectDependencyNameArg = (_: any, dependency: string) => dependency;

// prettier-ignore
const selectDependencyVersion = createSelector(
  [selectDependencies, selectDependencyNameArg],
  (dependencies, dependency) =>
    dependencies.find((dep) => dep.name === dependency)?.version,
);

export default {
  selectFile,
  selectDependencies,
  selectPluginNames,
  selectIncompatiblePlugins,
  selectDependencyVersion,
};
