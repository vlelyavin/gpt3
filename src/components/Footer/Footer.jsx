import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__column">
            <h1 className="footer__column__main">GPT-3</h1>
          </div>
          <div className="footer__column">
            <h1 className="footer__column__title">Links</h1>
            <ul className="footer__column__links">
              <a href="#overons" className="footer__column__link">
                Overons
              </a>
              <a href="#social" className="footer__column__link">
                Social Media
              </a>
              <a href="#counters" className="footer__column__link">
                Counters
              </a>
              <a href="#contact" className="footer__column__link">
                Contact
              </a>
            </ul>
          </div>
          <div className="footer__column">
            <h1 className="footer__column__title">Company</h1>
            <ul className="footer__column__links">
              <a href="#d" className="footer__column__link">
                Terms & Conditions
              </a>
              <a href="#d" className="footer__column__link">
                Privacy Policy
              </a>
              <a href="#d" className="footer__column__link">
                Contact
              </a>
            </ul>
          </div>
          <div className="footer__column">
            <h1 className="footer__column__title">Get in touch</h1>
            <ul className="footer__column__links">
              <a href="#d" className="footer__column__link">
                085-132567
              </a>
              <a href="#d" className="footer__column__link">
                info@payme.net
              </a>
            </ul>
          </div>
        </div>
        <p className="footer__rights">© 2021 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  );
};
