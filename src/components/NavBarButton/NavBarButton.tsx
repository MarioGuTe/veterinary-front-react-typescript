import { NavLink } from "react-router-dom";
import s from "./style.module.css";

function NavBarButton({
  buttonLink,
  buttonText,
}: {
  buttonLink: string;
  buttonText: string;
}) {
  return (
    <NavLink to={buttonLink}>
      <button className={s.nav_button}>{buttonText}</button>
    </NavLink>
  );
}

export default NavBarButton;
