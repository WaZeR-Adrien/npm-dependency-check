import { useNavigate } from 'react-router-dom';
import { version } from '../../../package.json';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header__left">
        <p className="header__left__brand-name mb-0 text-white" role="button" onClick={() => navigate('/')}>
          NPM <span className="fw-lighter">Dependency Check</span>
        </p>
        <p className="header__left__subtitle text-white">v{version} - by Adrien MARTINEAU</p>
      </div>
    </div>
  );

  /*return (
    <Navbar color="primary" className="header">
      <NavbarBrand className="text-light" role="button" onClick={() => navigate('/')}>
        NPM <span className="fw-lighter">Dependency Check</span>
      </NavbarBrand>
      <NavbarText className="header__version text-light fw-lighter text-small">v{version}</NavbarText>
    </Navbar>
  );*/
};

export default Header;
