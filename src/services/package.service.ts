import { getPackageManifest } from 'query-registry';

const getReactRequirement = async (name: string, version: string) => {
  const manifest = await getPackageManifest({ name, version });
  return manifest.peerDependencies?.react;
};

export default {
  getReactRequirement,
};
