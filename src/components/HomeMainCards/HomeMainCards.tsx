import s from "./style.module.css";

function HomeMainCards() {
  return (
    <div className={s.cards_container}>
      <div className={s.card}>
        <div className={s.card_image_container}>
          <img src="https://placehold.jp/150x150.png" alt="" />
        </div>
        <div className={s.cards_text_container}>
          <h3>Servicio Veterinario</h3>
          <p>Brindamos atención excepcional. ¡Reserva tu cita ahora!</p>
        </div>
      </div>
      <div className={s.card}>
        <div className={s.card_image_container}>
          <img src="https://placehold.jp/150x150.png" alt="" />
        </div>
        <div className={s.cards_text_container}>
          <h3>Servicio Veterinario</h3>
          <p>Brindamos atención excepcional. ¡Reserva tu cita ahora!</p>
        </div>
      </div>
      <div className={s.card}>
        <div className={s.card_image_container}>
          <img src="https://placehold.jp/150x150.png" alt="" />
        </div>
        <div className={s.cards_text_container}>
          <h3>Servicio Veterinario</h3>
          <p>brindamos atención excepcional. ¡Reserva tu cita ahora</p>
        </div>
      </div>
    </div>
  );
}

export default HomeMainCards;
