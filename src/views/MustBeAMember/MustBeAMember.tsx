import { Link } from "react-router-dom";
import s from "./MustBeAMember.module.css";
function MustBeAMember() {
  return (
    <div className={s.must_page_container}>
      <div className={s.must_text_container}>
        <h2>Estás a solo un paso!</h2>
        <p>
          Únete a la manada de CatDogVet y podrás acceder a beneficios
          exclusivos y ofertas exclusivas para miembros registrados, así como
          nuestro servicio de atención clínica y servicio de peluquería de
          mascotas
        </p>
        <Link to="/registro">
          <button className={s.must_btn}>Registrarse</button>
        </Link>
        <p>
          Ya eres Miembro? haz click{" "}
          <span>
            <Link to="/iniciar-sesion">aquí</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default MustBeAMember;
