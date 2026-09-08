import "./Footer.css";

import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        <div className="footer-top">

          <div className="footer-brand">
            <h3>Kuyen</h3>
            <p>Manualidades</p>
          </div>

          <div className="footer-social-section">
            <h4>Síguenos</h4>

            <div className="footer-socials">
              <a
                href="https://www.instagram.com/kuyen_manualidades"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de Kuyen Manualidades"
                title="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="mailto:kuyenmanualidades@gmail.com"
                aria-label="Correo electrónico de Kuyen Manualidades"
                title="Correo electrónico"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://wa.me/56976433432"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp de Kuyen Manualidades"
                title="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

        </div>

        <p className="footer-slogan">
          Contáctanos para más información sobre nuestros productos.
        </p>

        <p className="footer-copy">
          &copy; 2026 Kuyen Manualidades. Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
};

export default Footer;