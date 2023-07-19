import { PackageJSON } from 'query-registry';

export const readJsonFile = (file: Blob): Promise<any> =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsText(file, 'UTF-8');

    fileReader.onload = (e) => {
      if (e.target) {
        try {
          resolve(JSON.parse(e.target.result as string));
        } catch (e) {
          reject(e);
        }
      }
    };
    fileReader.onerror = (error) => reject(error);
  });

export const isPackageFile = (file: any): file is PackageJSON =>
  'name' in file && 'version' in file && 'packages' in file && 'lockfileVersion' in file && file.lockfileVersion > 1;
