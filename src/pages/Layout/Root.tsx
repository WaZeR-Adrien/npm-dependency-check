import { Outlet } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import { version } from '../../../package.json';

const Root = () => {
  return (
    <div className="">
      <Navbar color="info">
        <NavbarBrand className="text-light" href="/">
          React Update
        </NavbarBrand>
        <NavbarText className="text-light">v{version}</NavbarText>
      </Navbar>
      <div className="d-flex justify-content-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
