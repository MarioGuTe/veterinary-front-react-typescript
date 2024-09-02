import HomeMainCards from "../HomeMainCards/HomeMainCards";
import HomeMainImage from "../HomeMainImage/HomeMainImage";
import s from "./style.module.css";
function HomeMainSection() {
  return (
    <section className={s.main_section}>
      <HomeMainImage />
      <div className={s.welcome_text_container}>
        <h2>
          EL MEJOR CUIDADO <br></br> PARA TU MEJOR AMIGO
        </h2>
        <p>
          Nos dedicamos apasionadamente al cuidado de tus mascotas como si
          fueran nuestras propias. Ofrecemos un ambiente acogedor y profesional
          donde tú y tu compañero peludo se sentirán como en casa.
        </p>
      </div>
      <HomeMainCards />
    </section>
  );
}

export default HomeMainSection;
