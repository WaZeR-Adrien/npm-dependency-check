import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { PackageJSON } from 'query-registry';
import { coerce, satisfies } from 'semver';
import { PackageLockState } from '@/store/slices/package-lock.slice';

const selectFile = ({ packageLock }: RootState) => packageLock;

const selectDependencies = createSelector(selectFile, (packageLock: PackageLockState): PackageJSON[] =>
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

const selectOnlyReactPlugins = createSelector(selectDependencies, (dependencies: PackageJSON[]): PackageJSON[] =>
  dependencies.filter((dep) => dep.peerDependencies && dep.peerDependencies.react),
);

const selectReactPluginNames = createSelector(selectOnlyReactPlugins, (plugins: PackageJSON[]): string[] =>
  plugins.map((dep) => dep.name),
);

const selectIncompatibleReactPlugins = (reactVersionSelected: string) =>
  createSelector(selectOnlyReactPlugins, (plugins: PackageJSON[]): PackageJSON[] => {
    return plugins.filter(({ peerDependencies }) => {
      const reactRange = peerDependencies.react;
      return !satisfies(coerce(reactVersionSelected) || '', reactRange);
    });
  });

export default {
  selectFile,
  selectReactPluginNames,
  selectIncompatibleReactPlugins,
};
