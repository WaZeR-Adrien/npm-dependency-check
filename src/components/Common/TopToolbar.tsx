import { Navbar, NavbarText } from 'reactstrap';
import Breadcrumbs from '@/components/Common/Breadcrumbs';

const TopToolbar = () => (
  <Navbar className="top-toolbar bg-primary-subtle">
    <span>
      <Breadcrumbs />
    </span>
    <NavbarText className="top-toolbar__not-stored text-primary fw-lighter fst-italic">
      Data are stored only in local sessionStorage
    </NavbarText>
  </Navbar>
);

export default TopToolbar;
