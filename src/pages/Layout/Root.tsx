import { Outlet } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import { version } from '../../../package.json';
import Footer from '@/components/Common/Footer.tsx';

const Root = () => {
  return (
    <div className="layout">
      <Navbar color="primary" className="layout__navbar">
        <NavbarBrand className="text-light" href="/">
          React <span className="fw-lighter">Update</span>
        </NavbarBrand>
        <NavbarText className="text-light fw-lighter">v{version}</NavbarText>
      </Navbar>
      <div className="layout__outlet d-flex justify-content-center mt-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
