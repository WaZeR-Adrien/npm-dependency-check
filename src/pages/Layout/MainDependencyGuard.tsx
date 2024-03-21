import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import mainDependencySelectors from '@/store/selectors/main-dependency.selectors';

const MainDependencyGuard = () => {
  const isSelected = useSelector(mainDependencySelectors.isSelected);

  return isSelected ? <Outlet /> : <Navigate to="/" />;
};

export default MainDependencyGuard;
