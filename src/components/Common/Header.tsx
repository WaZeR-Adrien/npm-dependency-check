import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { version } from '../../../package.json';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar color="primary" className="layout__navbar">
      <NavbarBrand className="text-light" role="button" onClick={() => navigate('/')}>
        React <span className="fw-lighter">Update</span>
      </NavbarBrand>
      <NavbarText className="text-light fw-lighter">v{version}</NavbarText>
    </Navbar>
  );
};

export default Header;
