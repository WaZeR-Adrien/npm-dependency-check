import { Outlet } from 'react-router-dom';
import Header from '@/components/Common/Header.tsx';
import Footer from '@/components/Common/Footer.tsx';

const Root = () => (
  <div className="layout">
    <Header />
    <div className="layout__outlet d-flex justify-content-center mt-5 mb-5">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Root;
