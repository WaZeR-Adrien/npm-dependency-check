import { Outlet } from 'react-router-dom';
import Header from '@/components/Common/Header';
import Footer from '@/components/Common/Footer';
import TopToolbar from '@/components/Common/TopToolbar';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { SESSION_PACKAGE_KEY } from '@/utils/constants.ts';
import { isPackageFile } from '@/utils/files.ts';
import { set as setPackageLock } from '@/store/slices/package-lock.slice.ts';

const Root = () => {
  const dispatch = useDispatch();

  useMemo(() => {
    const sessionPackageLock = sessionStorage.getItem(SESSION_PACKAGE_KEY);

    try {
      const contentFile = JSON.parse(String(sessionPackageLock));

      if (isPackageFile(contentFile)) {
        dispatch(setPackageLock(contentFile));
      }
    } catch (e) {
      console.log('Error while retrieving PackageLock in session', e);
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
