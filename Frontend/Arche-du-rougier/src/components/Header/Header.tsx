import Navbar from "../Navbar/Navbar";
import "./Header.css";
import banner from "../../assets/banner.jpg";
import { FaFacebookF } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <img src={banner} alt="Photo rougier de camares" className="banner" />
      <div className="logo"></div>
      <div className="link">
        <p>L'ARCHE DU ROUGIER</p>
        <a
          href="https://www.facebook.com/profile.php?id=61559863306176"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook-link"
        >
          <FaFacebookF />
        </a>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
