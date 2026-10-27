import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-top">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            RARE
            <span>PHARMA</span>
          </Link>

          <p>
            Specialty medicine access with a focus on
            reliability, documentation and supply coordination.
          </p>
        </div>

        <div className="footer-links">

          <div className="footer-column">
            <span className="footer-label">EXPLORE</span>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/insights">Insights</Link>
          </div>

          <div className="footer-column">
            <span className="footer-label">CONNECT</span>

            <Link to="/contact">Contact</Link>
            <a href="mailto:info@rarepharma.in">
              Email us
            </a>
          </div>

        </div>

      </div>

      <div className="footer-cta">
        <span>LOOKING FOR A SPECIALTY MEDICINE?</span>

        <Link to="/contact">
          <span>Start an enquiry</span>
          <ArrowUpRight size={20} />
        </Link>
      </div>

      <div className="footer-wordmark">
        RARE PHARMA
      </div>

      <div className="footer-bottom">

        <span>© {new Date().getFullYear()} RARE PHARMA</span>

        <span>
          Prescription-based medicine access
        </span>

        <span>ALL RIGHTS RESERVED</span>

      </div>

    </footer>
  );
}

export default Footer;