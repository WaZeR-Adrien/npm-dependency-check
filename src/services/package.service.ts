import { getPackageManifest, getPackument } from 'query-registry';

const getReactRequirement = async (name: string, version: string) => {
  const manifest = await getPackageManifest({ name, version });
  return manifest.peerDependencies?.react;
};

const getReactVersions = async () => {
  const manifest = await getPackument({ name: 'react' });
  return Object.keys(manifest.versions);
};

export default {
  getReactRequirement,
  getReactVersions,
};
