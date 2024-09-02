import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../redux/store";
import s from "./style.module.css";
function FooterInfo() {
  const isLoggedIn = useSelector((state: RootState) => state.login.login);

  return (
    <div className={s.footer_info_container}>
      <div className={s.social_media_container}>
        <h2>CatDogVet</h2>
        <p>Nuestras redes sociales</p>
        <div className={s.social_media_links}>
          <p>link1</p>
          <p>link2</p>
          <p>link3</p>
        </div>
      </div>
      <div className={s.pages_navigation}>
        <h2>Sitio</h2>
        <NavLink to="/">
          <p>Página Principal</p>
        </NavLink>
        <NavLink to="sobre-nosotros">
          <p>Acerca De Nosotros</p>
        </NavLink>
        {/* <p>Servicios</p> */}
        {isLoggedIn ? (
          <NavLink to="/agendar-cita">
            <p>Agenda Tu Cita</p>
          </NavLink>
        ) : (
          <NavLink to="/solo-miembros">
            <p>Agenda Tu Cita</p>
          </NavLink>
        )}
        {/* Return "Mis Citas " link only if user is logged in */}
        {isLoggedIn ? (
          <NavLink to="/mis-citas">
            <p>Mis Citas</p>
          </NavLink>
        ) : null}
      </div>
      <div className={s.footer_contact}>
        <h2>Contacto</h2>
        <p>Paulino Alfonso 331, Santiago, Chile</p>
        <p>+569 342342334</p>
        <p>catdogvet@mail.com</p>
      </div>
    </div>
  );
}

export default FooterInfo;
