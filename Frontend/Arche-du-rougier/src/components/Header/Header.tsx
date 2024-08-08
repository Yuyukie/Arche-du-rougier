import Navbar from "../Navbar/Navbar";
import "./Header.css";
import banner from "../../assets/banner.jpg";

function Header() {
  return (
    <div className="header">
      <img src={banner} alt="Photo rougier de camares" className="banner" />
      <div className="logo"></div>
      <p className="title-header">L'ARCHE DU ROUGIER</p>

      <Navbar />
    </div>
  );
}

export default Header;
