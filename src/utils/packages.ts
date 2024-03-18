import packageService from '@/services/package.service';
import { coerce, compareBuild, prerelease, satisfies } from 'semver';
import { PackageJSON } from 'query-registry';

export const getVersionOptionsFromPackage = (name: string) =>
  packageService.getPackageVersions(name).then((versionsManifest) =>
    versionsManifest
      .filter((manifest) => !prerelease(manifest.version))
      .sort((a, b) => compareBuild(b.version, a.version))
      .map((manifest) => ({ label: manifest.version, value: manifest })),
  );

export const getReactRequirement = ({ peerDependencies, dependencies }: PackageJSON) =>
  (peerDependencies && peerDependencies.react) || (dependencies && dependencies.react);

export const isCompatibleWithReactVersion = (plugin: PackageJSON, reactVersion: string) => {
  const reactRange = getReactRequirement(plugin) || '';
  return satisfies(coerce(reactVersion) || '', reactRange, { includePrerelease: true });
};
