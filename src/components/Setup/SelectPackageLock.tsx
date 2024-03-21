import UploadPackageLock from '@/components/Setup/UploadPackageLock';
import { useDispatch } from 'react-redux';
import { PackageLockState, setPackageLock } from '@/store/slices/package-lock.slice';
import { SESSION_PACKAGE_KEY } from '@/utils/constants';

const SelectPackageLock = () => {
  const dispatch = useDispatch();

  const handleSetPackageLock = (file: PackageLockState) => {
    dispatch(setPackageLock(file));
    sessionStorage.setItem(SESSION_PACKAGE_KEY, JSON.stringify(file));
  };

  return (
    <div className="select-package">
      <UploadPackageLock setPackageFile={handleSetPackageLock} />
    </div>
  );
};

export default SelectPackageLock;
