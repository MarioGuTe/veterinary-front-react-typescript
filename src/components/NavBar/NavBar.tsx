import { NavLink } from "react-router-dom";
import NavBarLinks from "../NavBarLinks/NavBarLinks";
import s from "./NavBar.module.css";

function NavBar() {
  return (
    <header className={s.nav_container}>
      <nav>
        <h1>
          <NavLink to="/">CatDogVet</NavLink>
        </h1>
        <NavBarLinks />
      </nav>
    </header>
  );
}

export default NavBar;
