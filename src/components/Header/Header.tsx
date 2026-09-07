import "./Header.css";
import logoKuyen from "../../assets/logo/logo-1.jpeg";

function Header() {
  return (
    <header className="site-header">
      <div className="site-header-brand">
        <img
          className="site-header-logo"
          src={logoKuyen}
          alt="Logo de Kuyen Manualidades"
        />

        <div>
          <h1>KUYEN MANUALIDADES</h1>
          <p>Porque hecho a mano es hecho con amor</p>
        </div>
      </div>
    </header>
  );
}

export default Header;