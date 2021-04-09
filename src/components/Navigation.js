import { NavLink } from "react-router-dom";
function Navigation() {
  return (
    <nav className="Navigation">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/characters">Characters</NavLink>
    </nav>
  );
}
export default Navigation;
