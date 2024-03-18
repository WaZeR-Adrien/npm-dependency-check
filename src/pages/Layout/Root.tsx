import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Common/Header';
import Footer from '@/components/Common/Footer';
import TopToolbar from '@/components/Common/TopToolbar';
import { SESSION_PACKAGE_KEY } from '@/utils/constants';
import { isPackageFile } from '@/utils/files';
import { setPackageLock } from '@/store/slices/package-lock.slice';

const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const sessionPackageLock = sessionStorage.getItem(SESSION_PACKAGE_KEY);

    if (!sessionPackageLock) {
      return;
    }

    try {
      const contentFile = JSON.parse(String(sessionPackageLock));

      if (isPackageFile(contentFile)) {
        dispatch(setPackageLock(contentFile));
      }
    } catch (e) {
      console.error('Error while retrieving PackageLock in session', e);
    }
  }, [dispatch]);

  return (
    <div className="layout">
      <Header />
      <TopToolbar />
      <div className="layout__outlet d-flex justify-content-center mt-5 mb-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
