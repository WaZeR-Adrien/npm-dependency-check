import { getPackageManifest, getPackument } from 'query-registry';

const getPackageDetail = (name: string, version: string) => {
  return getPackageManifest({ name, version });
};

const getPackageVersions = async (name: string) => {
  const manifest = await getPackument({ name });
  return Object.values(manifest.versions);
};

export default {
  getPackageDetail,
  getPackageVersions,
};
