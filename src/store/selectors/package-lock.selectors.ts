import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { PackageJSON } from 'query-registry';
import { PackageLockState } from '@/store/slices/package-lock.slice';
import { isCompatibleWithReactVersion } from '@/utils/packages';
import mainDependencySelectors from '@/store/selectors/main-dependency.selectors';

const selectFile = ({ packageLock }: RootState): PackageLockState | null => packageLock;

const selectDependencies = createSelector(selectFile, (packageLock): PackageJSON[] => {
  if (!packageLock) {
    return [];
  }
  const myPackage = packageLock.packages[''];
  const myDependencyNames = [
    ...Object.keys(myPackage.dependencies || {}),
    ...Object.keys(myPackage.devDependencies || {}),
  ];

  return (Object.entries(packageLock.packages) as [string, PackageJSON][])
    .filter(([key]) => !!key)
    .map(([key, value]) => ({
      ...value,
      name: key.replace('node_modules/', ''),
    }))
    .filter(({ name }) => myDependencyNames.includes(name));
});

const selectOnlyPlugins = createSelector(
  [selectDependencies, mainDependencySelectors.selectDependency],
  (dependencies, mainDep): PackageJSON[] =>
    dependencies.filter((dep) => dep.peerDependencies && dep.peerDependencies[mainDep || '']),
);

// prettier-ignore
const selectPluginNames = createSelector(selectOnlyPlugins, (plugins): string[] =>
  plugins.map((dep) => dep.name),
);

const selectReactVersionSelectedArg = (_: any, reactVersionSelected: string) => reactVersionSelected;

const selectIncompatiblePlugins = createSelector(
  [selectOnlyPlugins, selectReactVersionSelectedArg],
  (plugins, reactVersionSelected): PackageJSON[] =>
    plugins.filter((plugin) => !isCompatibleWithReactVersion(plugin, reactVersionSelected)),
);

const selectDependencyNameArg = (_: any, dependency: string) => dependency;

const selectDependencyVersion = createSelector(
  [selectDependencies, selectDependencyNameArg],
  (dependencies, dependency) => {
    const plugin = dependencies.find((dep) => dep.name === dependency);
    return plugin?.version;
  },
);

export default {
  selectFile,
  selectDependencies,
  selectPluginNames,
  selectIncompatiblePlugins,
  selectDependencyVersion,
};
