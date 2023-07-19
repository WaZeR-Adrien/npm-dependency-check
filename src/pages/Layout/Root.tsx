import { Outlet } from 'react-router-dom';
import Header from '@/components/Common/Header';
import Footer from '@/components/Common/Footer';
import TopToolbar from '@/components/Common/TopToolbar';

const Root = () => (
  <div className="layout">
    <Header />
    <TopToolbar />
    <div className="layout__outlet d-flex justify-content-center mt-5 mb-5">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Root;
