import { Outlet } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import { version } from '../../../package.json';

const Root = () => {
  return (
    <div className="layout">
      <Navbar color="primary" className="layout__navbar">
        <NavbarBrand className="text-light" href="/">
          React Update
        </NavbarBrand>
        <NavbarText className="text-light fw-light">v{version}</NavbarText>
      </Navbar>
      <div className="layout__outlet d-flex justify-content-center mt-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
