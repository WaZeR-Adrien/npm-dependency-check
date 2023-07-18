import IonIcon from '@reacticons/ionicons';

const Footer = () => (
  <div className="footer bg-primary fw-lighter">
    <p className="text-light m-0">Developed by Adrien MARTINEAU with ❤ in Nantes (France)</p>
    <a href="https://github.com/WaZeR-Adrien/react-update" target="_blank">
      <IonIcon className="text-light footer__icon" name="logo-github" size="large" />
    </a>
  </div>
);

export default Footer;
