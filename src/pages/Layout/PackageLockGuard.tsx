import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import packageLockSelectors from '@/store/selectors/package-lock.selectors';

const PackageLockGuard = () => {
  const packageLock = useSelector(packageLockSelectors.selectFile);

  return packageLock ? <Outlet /> : <Navigate to="/" />;
};

export default PackageLockGuard;
