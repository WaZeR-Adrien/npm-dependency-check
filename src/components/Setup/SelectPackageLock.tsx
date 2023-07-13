import UploadPackageLock from '@/components/Setup/UploadPackageLock';
import { useDispatch } from 'react-redux';
import { set as setPackageLock } from '@/store/slices/package-lock.slice';

const SelectPackageLock = () => {
  const dispatch = useDispatch();
  return (
    <>
      <p>Select your package-lock.json</p>
      <UploadPackageLock setPackageFile={(file) => dispatch(setPackageLock(file))} />
    </>
  );
};

export default SelectPackageLock;
