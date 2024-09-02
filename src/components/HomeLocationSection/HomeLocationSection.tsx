import s from "./style.module.css";

function HomeLocationSection() {
  return (
    <section className={s.location_section}>
      <div className={s.data_container}>
        <div className={s.title_container}>
          <h2>Ven a Visitarnos!</h2>
          <p>
            Estamos a pasos del Metro Universidad Católica en el Centro de la
            comuna de Santiago
          </p>
        </div>
        <div className={s.details_container}>
          {/* Vet Contact Details */}
          <div>
            <h3>Contacto</h3>
            <p>342342334</p>
            <p>email@mail.com</p>
          </div>
          {/* Vet Address */}
          <div>
            <h3>Ubicación</h3>
            <p>Paulino Alfonso 331</p>
            <p>Santiago, Chile</p>
          </div>
          {/* Vet working hours */}
          <div>
            <h3>Horario</h3>
            <p>Lunes a Viernes: 9:00 am - 7:00 pm</p>
            <p>Sábado y Domingo: 9:00 am - 5:00 pm</p>
          </div>
        </div>
      </div>

      <div className={s.map_container}>
        <iframe
          width="100%"
          height="100%"
          // frameborder="0"
          // scrolling="no"
          // marginheight="0"
          // marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Paulino%20Alfonso,%20Santiago,%20Chile+(CatDogVet)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps systems</a>
        </iframe>
      </div>
    </section>
  );
}

export default HomeLocationSection;
