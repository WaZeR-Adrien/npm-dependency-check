import { getPackageManifest, getPackument } from 'query-registry';

const getReactRequirement = async (name: string, version: string) => {
  const manifest = await getPackageManifest({ name, version });
  return manifest.peerDependencies?.react;
};

const getPackageVersions = async (name: string) => {
  const manifest = await getPackument({ name });
  return Object.keys(manifest.versions);
};

export default {
  getReactRequirement,
  getPackageVersions,
};
