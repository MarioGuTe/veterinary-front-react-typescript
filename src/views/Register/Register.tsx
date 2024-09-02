import axios from "axios";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import RegisterImg from "../../assets/images/register-image.jpg";
import { useNavigate } from "react-router-dom";
import s from "./Register.module.css";
import "react-datepicker/dist/react-datepicker.css";

interface FormModel {
  name: string;
  email: string;
  birthdate: Date | undefined;
  nDni: string;
  username: string;
  password: string;
}

function Register() {
  const navigate = useNavigate();

  // Formkik Logic
  const formik = useFormik<FormModel>({
    initialValues: {
      name: "",
      email: "",
      birthdate: undefined,
      nDni: "",
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          import.meta.env.VITE_USERS_REGISTER_ENDPOINT,
          values
        );
        alert(`Bienvenidoa la manada ${response.data.name}`);
        navigate("/");
      } catch (error) {
        console.error("Error:", error);
        // Handle error, show error message to the user
      }
    },
  });

  const dateOnChange = (date: Date) => formik.setFieldValue("birthdate", date);

  return (
    <div className={s.form_container}>
      {" "}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
        className={s.register_form}
      >
        <div className={s.form_main_section}>
          <h2>Bienvenido 👋</h2>
          <p className={s.register_description}>
            Registrate y únete a la manada de CatDogVet.
          </p>
          <div className={s.inputs_section}>
            {/* Name input field */}
            <div>
              <label htmlFor="name">Nombre y Apellido</label>
              <p></p>
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="placeholder"
                autoComplete="off"
                id="name"
              />
            </div>
            {/* Email input field */}
            <div>
              <label htmlFor="email">Correo Electrónico </label>
              <p></p>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="off"
                id="email"
              />
            </div>
            {/* Birthdate input field */}
            <div>
              <label htmlFor="birthdate">Fecha de Nacimiento</label>

              <p></p>
              <div className="register-datepicker">
                <DatePicker
                  selected={formik.values.birthdate}
                  onChange={dateOnChange}
                  placeholderText="01/01/2024"
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                />
              </div>
            </div>
            {/* nDni input field */}
            <div>
              <label htmlFor="nDni">Cédula de Identidad (RUN/DNI/CI/RUT)</label>
              <p></p>
              <input
                type="text"
                name="nDni"
                value={formik.values.nDni}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="nDni"
              />
            </div>
            {/* username field */}
            <div>
              <label htmlFor="username">Nombre de Usuario</label>
              <p></p>
              <input
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoComplete="off"
                id="username"
              />
            </div>
            {/* password field */}
            <div>
              <label htmlFor="password">Contraseña</label>
              <p></p>
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="password"
              />
            </div>
            <button type="submit" className={s.submit_btn}>
              Registrate
            </button>
          </div>
        </div>
        <div className={s.form_image_container}>
          <img src={RegisterImg} alt="cat-looking-sideways" />
        </div>
      </form>
    </div>
  );
}

export default Register;
