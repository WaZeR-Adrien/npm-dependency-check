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

export const getMainDependencyRequirement = (mainDep: string, plugin: PackageJSON) =>
  plugin.peerDependencies?.[mainDep] || plugin.dependencies?.[mainDep] || plugin.engines?.[mainDep];

export const isCompatibleWithMainDepVersion = (mainDependency: string, plugin: PackageJSON, version: string) => {
  const range = getMainDependencyRequirement(mainDependency, plugin) || '';
  return satisfies(coerce(version) || '', range, { includePrerelease: true });
};
