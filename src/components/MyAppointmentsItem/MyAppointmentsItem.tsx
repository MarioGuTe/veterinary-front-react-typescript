import { formatDate } from "../../utils/formatDateUtils";
import catAppointnment from "../../assets/images/cat-appointment.jpg";
import s from "./MyAppointmentsItem.module.css";
import { NavLink } from "react-router-dom";

type IProps = {
  id: number;
  date: string;
  time: string;
  userId: number;
  status: string;
  handleOnClick: (prop: number) => void;
};

function MyAppointmentsItem(props: IProps) {
  const { id, date, time, userId, status, handleOnClick } = props;

  const formattedDate = formatDate(date);

  return (
    <div className={s.my_appointments_item}>
      <div className={s.appointments_img_container}>
        <img src={catAppointnment} alt="" />
      </div>
      <p>
        <span>ID:</span> {id}
      </p>
      <p>
        <span>Date:</span>
        {formattedDate}
      </p>
      <p>
        <span>Time:</span> {time}
      </p>
      <p>
        <span>User ID:</span>
        {userId}
      </p>
      {status === "active" ? (
        <>
          <p className={s.active_appointment}>Confirmada</p>
          <button
            onClick={() => {
              handleOnClick(id);
            }}
          >
            Cancelar
          </button>
        </>
      ) : (
        <>
          <p className={s.cancelled_appointment}>Cancelada</p>
          <NavLink to="/agendar-cita">
            <button>Nueva Cita</button>
          </NavLink>
        </>
      )}
    </div>
  );
}

export default MyAppointmentsItem;
