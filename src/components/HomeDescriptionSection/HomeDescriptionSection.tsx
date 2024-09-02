import descriptionImg from "../../assets/images/description-image.jpg";
import s from "./style.module.css";
function HomeDescriptionSection() {
  return (
    <section className={s.description_section}>
      <div className={s.image_container}>
        <img src={descriptionImg} alt="" />
      </div>
      <div className={s.text_container}>
        <p>Bienvenido a CatDogVet</p>
        <h2>
          Una experiencia única y especializada para el cuidado de tus mascotas
        </h2>
        <p>
          Nuestro compromiso es garantizar el <span>bienestar</span> y la{" "}
          <span>salud</span> de tus mascotas, brindándoles el cuidado y la
          atención que se merecen. Ven y descubre un refugio seguro y
          reconfortante para tus amigos peludos en nuestro Veterinary Service,
          donde la <span>tranquilidad</span> y el <span>amor</span> por los
          animales son nuestra prioridad principal. ¡Estamos aquí para ayudarte
          en cada paso del camino!"
        </p>
      </div>
    </section>
  );
}

export default HomeDescriptionSection;
