import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { PackageJSON } from 'query-registry';
import { PackageLockState } from '@/store/slices/package-lock.slice';
import { isCompatibleWithReactVersion } from '@/utils/packages.ts';

const selectFile = ({ packageLock }: RootState): PackageLockState => packageLock as any;

const selectDependencies = createSelector(selectFile, (packageLock): PackageJSON[] =>
  (Object.entries(packageLock.packages) as [string, any])
    .filter(([key]) => !!key)
    .reduce(
      (acc, [key, value]) => [
        ...acc,
        {
          ...value,
          name: key.replace('node_modules/', ''),
        },
      ],
      [],
    ),
);

const selectOnlyReactPlugins = createSelector(selectDependencies, (dependencies): PackageJSON[] =>
  dependencies.filter((dep) => dep.peerDependencies && dep.peerDependencies.react),
);

const selectReactPluginNames = createSelector(selectOnlyReactPlugins, (plugins): string[] =>
  plugins.map((dep) => dep.name),
);

const selectReactVersionSelectedArg = (_: any, reactVersionSelected: string) => reactVersionSelected;

const selectIncompatibleReactPlugins = createSelector(
  [selectOnlyReactPlugins, selectReactVersionSelectedArg],
  (plugins, reactVersionSelected): PackageJSON[] =>
    plugins.filter((plugin) => !isCompatibleWithReactVersion(plugin, reactVersionSelected)),
);

const selectReactVersion = createSelector(selectDependencies, (dependencies) => {
  const react = dependencies.find((dep) => dep.name === 'react');
  return react?.version;
});

export default {
  selectFile,
  selectReactPluginNames,
  selectIncompatibleReactPlugins,
  selectReactVersion,
};
