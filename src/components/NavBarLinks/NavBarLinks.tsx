import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { NavLink } from "react-router-dom";
import NavBarButton from "../NavBarButton/NavBarButton";
import HamburgerIcon from "../NavHamburger/NavHamburger";
import s from "./NavBarLinks.module.css";

function NavBarLinks() {
  const isLoggedIn = useSelector((state: RootState) => state.login.login);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const handleShowNavbar = (toggled: boolean) => {
    return toggled ? setShowNavbar(true) : setShowNavbar(false);
  };
  return (
    <>
      <ul className={`${showNavbar && s.active}`}>
        <NavLink to="/">
          <li>Página Principal</li>
        </NavLink>
        <NavLink to="sobre-nosotros">
          <li>Acerca De Nosotros</li>
        </NavLink>
        {/* <li>Servicios</li> */}
        {isLoggedIn ? (
          <NavLink to="/agendar-cita">
            <li>Agenda Tu Cita</li>
          </NavLink>
        ) : (
          <NavLink to="/solo-miembros">
            <li>Agenda Tu Cita</li>
          </NavLink>
        )}
        {/* Return "Mis Citas " link only if user is logged in */}
        {isLoggedIn ? (
          <NavLink to="/mis-citas">
            <li>Mis Citas</li>
          </NavLink>
        ) : null}
        <li className={s.buttons_container}>
          <NavBarButton buttonLink="/registro" buttonText="Registrarse" />
          <NavBarButton
            buttonLink="/iniciar-sesion"
            buttonText="Iniciar Sesión"
          />
        </li>
      </ul>
      <HamburgerIcon onItemClick={handleShowNavbar} />
    </>
  );
}

export default NavBarLinks;
