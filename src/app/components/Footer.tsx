"use client";

import Logo from "./Logo";
import Social from "./Social";

const Footer = () => {
  return (
    <section id="contact" className="footer-section">
      <div className="footer-grid">
        <Logo />
        <div className="copyright">
          <span>Donoso Films © 2024. Todos los derechos reservados.</span>
        </div>
        <Social />
      </div>
    </section>
  );
};

export default Footer;
