import Navbar from "../Navbar/Navbar";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <div>
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
