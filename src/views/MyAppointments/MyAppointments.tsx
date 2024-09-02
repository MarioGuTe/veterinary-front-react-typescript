// import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import MyAppointmentsItem from "../../components/MyAppointmentsItem/MyAppointmentsItem";
import { setUserAppointments } from "../../redux/login/loginSlice";
import { TailSpin } from "react-loader-spinner";
import s from "./MyAppointments.module.css";
import { RootState } from "../../redux/store";

function MyAppointments() {
  const USERS_BASE_ENDPOINT = import.meta.env.VITE_USERS_BASE_ENDPOINT;

  const user = useSelector((state: RootState) => state.login.user);
  const userAppointments = useSelector(
    (state: RootState) => state.login.userAppointments
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${USERS_BASE_ENDPOINT}${user.id}`);
        dispatch(setUserAppointments(response.data.appointments));
      } catch (error) {
        setError("Error fetching appointments");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user.id, dispatch, USERS_BASE_ENDPOINT]);

  const handleAppointmentCancel = async (appointmentsId: number) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_APPOINTMENTS_CANCEL_ENDPOINT}${appointmentsId}`
      );
      console.log(response, "response");
      const getAppointments = await axios.get(
        `${USERS_BASE_ENDPOINT}${user.id}`
      );
      console.log(getAppointments, "getAppointments");
      dispatch(setUserAppointments(getAppointments.data.appointments));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading) {
    return (
      <div className={s.loader_container}>
        <h2>En un momento podrás visualizar tus turnos</h2>
        <TailSpin
          visible={true}
          height="140"
          width="140"
          color="#E085B3"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  if (error) {
    console.error("Error fetching appointments:", error);
    return (
      <div className={s.loader_container}>
        <h2>
          Ha ocurrido un problema al cargar tus datos. <br /> Por favor
          inténtalo más tarde
        </h2>
      </div>
    );
  }

  if (!userAppointments.length) {
    return (
      <div className={s.loader_container}>
        <h2>Aún no tienes citas agendadas</h2>
      </div>
    );
  }

  return (
    <div className={s.my_appointments_section}>
      <div className={s.my_appointments_title}>
        <h2>Mis Citas</h2>
      </div>
      <div className={s.my_appointments_container}>
        {userAppointments.map((appointment) => (
          <MyAppointmentsItem
            key={appointment.id}
            id={appointment.id}
            date={appointment.date}
            time={appointment.time}
            userId={appointment.userId}
            status={appointment.status}
            handleOnClick={handleAppointmentCancel}
          />
        ))}
      </div>
    </div>
  );
}

export default MyAppointments;
