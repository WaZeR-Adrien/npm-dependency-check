import UploadPackageLock from '@/components/Setup/UploadPackageLock';
import { useDispatch } from 'react-redux';
import { PackageLockState, set as setPackageLock } from '@/store/slices/package-lock.slice';
import { SESSION_PACKAGE_KEY } from '@/utils/constants.ts';

const SelectPackageLock = () => {
  const dispatch = useDispatch();

  const handleSetPackageLock = (file: PackageLockState) => {
    dispatch(setPackageLock(file));
    sessionStorage.setItem(SESSION_PACKAGE_KEY, JSON.stringify(file));
  };

  return (
    <div className="select-package">
      <p className="select-package__title mb-0">Select your package-lock.json</p>
      <p className="select-package__version fst-italic text-small text-primary">lockfileVersion {'>'} 1 / from NPM 7</p>
      <UploadPackageLock setPackageFile={handleSetPackageLock} />
    </div>
  );
};

export default SelectPackageLock;
