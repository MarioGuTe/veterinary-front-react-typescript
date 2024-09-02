import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import s from "./ScheduleAppointment.module.css";
import { useNavigate } from "react-router-dom";

function ScheduleAppointment() {
  const navigate = useNavigate();

  const userId = useSelector((state: RootState) => state.login.user.id);

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      userId: userId.toString(),
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Fecha es requerida"),
      time: Yup.string().required("Hora es requerida"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          import.meta.env.VITE_APPOINTMENTS_SCHEDULE_ENDPOINT,
          values
        );
        console.log("Appointment Scheduled:", response.data);
        alert(`Tu cita ha sido reservada con éxito`);
        navigate("/");
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  return (
    <div className={s.schedule_appointment_container}>
      <form onSubmit={formik.handleSubmit} className={s.appointment_form}>
        <h2>Schedule an Appointment</h2>
        <div className={s.form_group}>
          <label htmlFor="date">Fecha</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
          />
          {formik.touched.date && formik.errors.date ? (
            <div className={s.error}>{formik.errors.date}</div>
          ) : null}
        </div>
        <div className={s.form_group}>
          <label htmlFor="time">Horario</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formik.values.time}
            onChange={formik.handleChange}
          />
          {formik.touched.time && formik.errors.time ? (
            <div className={s.error}>{formik.errors.time}</div>
          ) : null}
        </div>
        <button type="submit" className={s.schedule_btn}>
          Schedule
        </button>
      </form>
    </div>
  );
}

export default ScheduleAppointment;
