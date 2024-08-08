import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-bar">
        <a href="#event" className="nav-bar-button">
          Nouveautés
        </a>
        <a href="#arche" className="nav-bar-button">
          L'arche du Rougier
        </a>
        <a href="#apropos" className="nav-bar-button">
          À propos de nous
        </a>
        <a href="#tarifs" className="nav-bar-button">
          Tarifs
        </a>
        <a href="#nous-retrouver" className="nav-bar-button">
          Nous retrouver
        </a>
      </div>
    </div>
  );
}

export default Navbar;
