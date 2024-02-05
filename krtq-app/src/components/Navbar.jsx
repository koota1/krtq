import {Link} from "react-router-dom";

function Navbar () {
  return (
    <nav className="nav-bar">
      <h1 id="name">Critical</h1>
      <div className="links">
        <Link className="nav-bar_link" to="">Landing</Link>
        <Link className="nav-bar_link" to="/auth">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;