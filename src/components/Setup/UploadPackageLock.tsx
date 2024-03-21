import React, { useRef, useState } from 'react';
import { isPackageFile, readJsonFile } from '@/utils/files';
import IonIcon from '@reacticons/ionicons';

interface Props {
  setPackageFile: (file: any) => void;
}

const UploadPackageLock = ({ setPackageFile }: Props) => {
  const [filename, setFilename] = useState('');
  const [isError, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const { current } = inputRef;
    if (current) {
      current.click();
    }
  };

  const handleChange = async ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.files && target.files.length) {
      setError(false);

      const file = target.files.item(0);
      if (!file) {
        return setError(true);
      }

      setFilename(file.name);

      try {
        const packageFile = await readJsonFile(file);

        if (!isPackageFile(packageFile)) {
          return setError(true);
        }
        setPackageFile(packageFile);
      } catch (_) {
        setError(true);
      }
    }
  };

  return (
    <>
      <div
        className={`upload-package-lock m-auto ${isError ? 'upload-package-lock--error' : ''}`}
        role="button"
        onClick={handleClick}>
        <IonIcon className="upload-package-lock__icon text-primary" name="cloud-upload-outline" size="large" />
        <p className="upload-package-lock__title h4 fw-normal">UPLOAD</p>
        {filename && <p className="upload-package-lock__subtitle fst-italic mb-0">{filename}</p>}

        <input ref={inputRef} className="d-none" type="file" accept=".json,application/json" onChange={handleChange} />
      </div>
    </>
  );
};

export default UploadPackageLock;
