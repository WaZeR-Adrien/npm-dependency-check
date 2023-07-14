import { RootState } from '@/store/store';
import { PackageJSON } from 'query-registry';
import { coerce, satisfies } from 'semver';

export default {
  selectFile: ({ packageLock }: RootState) => packageLock,
  selectIncompatibleDependencies:
    (reactVersionSelected: string) =>
    ({ packageLock }: RootState) => {
      const dependencies: PackageJSON[] = (Object.entries(packageLock.packages) as [string, any])
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
        );

      return dependencies
        .filter(({ peerDependencies }) => peerDependencies && peerDependencies.react)
        .filter(({ peerDependencies }) => {
          const reactRange = peerDependencies.react;
          return !satisfies(coerce(reactVersionSelected) || '', reactRange);
        });
    },
};
