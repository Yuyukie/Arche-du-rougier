import ContactForm from "../Contact/ContactForm";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-collumn">colonne 1</div>
      <div className="footer-collumn"> colonne 2</div>
      <div className="footer-collumn">
        <ContactForm />
      </div>
    </div>
  );
}

export default Footer;
