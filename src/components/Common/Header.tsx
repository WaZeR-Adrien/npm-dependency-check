import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { version } from '../../../package.json';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar color="primary" className="header">
      <NavbarBrand className="text-light" role="button" onClick={() => navigate('/')}>
        NPM <span className="fw-lighter">Dependency Check</span>
      </NavbarBrand>
      <NavbarText className="header__version text-light fw-lighter text-small">v{version}</NavbarText>
    </Navbar>
  );
};

export default Header;
