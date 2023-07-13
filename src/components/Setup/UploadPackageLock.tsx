import React, { useRef, useState } from 'react';
import { isPackageFile, readJsonFile } from '@/utils/files';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

interface Props {
  setPackageFile: (file: any) => void;
}

const UploadPackageLock = ({ setPackageFile }: Props) => {
  const [filename, setFilename] = useState('');
  const [isError, setError] = useState(false);
  const inputRef = useRef(null);

  const handleChange = async ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.files && target.files.length) {
      setError(false);

      const file = target.files.item(0);
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
    <div
      className={`upload-package-lock ${isError ? 'upload-package-lock--error' : ''}`}
      role="button"
      onClick={() => inputRef.current.click()}>
      <FontAwesomeIcon className="upload-package-lock__icon text-primary" icon={faCloudArrowUp} size="4x" />
      <p className="upload-package-lock__title h4">Import</p>
      {filename && <p className="upload-package-lock__name fst-italic">{filename}</p>}

      <input
        ref={inputRef}
        className="upload-package-lock__input"
        type="file"
        accept=".json,application/json"
        onChange={handleChange}
      />
    </div>
  );
};

export default UploadPackageLock;
