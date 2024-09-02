import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home";
import Register from "./views/Register/Register";
import MyAppointments from "./views/MyAppointments/MyAppointments";
import ScheduleAppointment from "./views/ScheduleAppointment/ScheduleAppointment";
import MustBeAMember from "./views/MustBeAMember/MustBeAMember";
import AboutUs from "./views/AboutUs/AboutUs";
import Login from "./views/Login/Login";
import "./global.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/mis-citas" element={<MyAppointments />} />
        <Route path="/agendar-cita" element={<ScheduleAppointment />} />
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/solo-miembros" element={<MustBeAMember />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
