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
    <>
      <p>Select your package-lock.json</p>
      <UploadPackageLock setPackageFile={handleSetPackageLock} />
    </>
  );
};

export default SelectPackageLock;
