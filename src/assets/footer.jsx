import React from 'react';
import logoag1 from "./img/logoag.png";

const Footer = () => {
  return (
    <footer className="footer-principal">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logoag1} alt="AG Mantenimiento" />
            <p>
              Mantenimiento<br />industrial
            </p>
          </div>
          <div className="footer-social">
            {/* Instagram */}
            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.75 1a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V5.75a.75.75 0 0 1 .75-.75ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
            </svg>
            {/* Twitter */}
            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M22 5.94a8.27 8.27 0 0 1-2.36.64A4.14 4.14 0 0 0 21.4 4.1a8.28 8.28 0 0 1-2.62 1A4.13 4.13 0 0 0 11.29 9a11.7 11.7 0 0 1-8.5-4.31 4.13 4.13 0 0 0 1.27 5.52 4.1 4.1 0 0 1-1.87-.52v.05a4.13 4.13 0 0 0 3.31 4.05 4.19 4.19 0 0 1-1.86.07 4.14 4.14 0 0 0 3.85 2.87A8.29 8.29 0 0 1 2 19.54a11.7 11.7 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.69 0-.18-.01-.36-.02-.54A8.36 8.36 0 0 0 22 5.94Z" />
            </svg>
            {/* Facebook */}
            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.87v-7H8v-3h2.5v-2.3c0-2.46 1.47-3.82 3.73-3.82 1.08 0 2.2.2 2.2.2v2.42H15.6c-1.23 0-1.6.77-1.6 1.56V12H18l-.5 3h-2.5v7A10 10 0 0 0 22 12Z" />
            </svg>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-contact">
            <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24c1.12.37 2.33.57 3.59.57a1 1 0 0 1 1 1v3.57a1 1 0 0 1-1 1A17.91 17.91 0 0 1 3 5a1 1 0 0 1 1-1h3.57a1 1 0 0 1 1 1c0 1.26.2 2.47.57 3.59a1 1 0 0 1-.24 1l-2.2 2.2Z"/>
            </svg>
            <span>+591 78593512</span>
          </div>
          <div className="footer-contact">
            <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 4.47 7 13 7 13s7-8.53 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>
            </svg>
            <span>Juan Latino 2790, Santa Cruz de la Sierra</span>
          </div>
          <div className="footer-contact">
            <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
              <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.17l-10 6.25L2 5.17V4Zm0 3.36V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7.36l-9.45 5.9a1 1 0 0 1-1.1 0L2 7.36Z"/>
            </svg>
            <span>bernardochavezcaba@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        <p>AG MANTTO © 2025 TODOS LOS DERECHOS RESERVADOS</p>
      </div>
    </footer>
  );
};

export default Footer;
