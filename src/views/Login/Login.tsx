import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import RegisterImg from "../../assets/images/register-image.jpg";
import { useDispatch } from "react-redux";
import s from "./Login.module.css";
import { setLogin, setUser } from "../../redux/login/loginSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post(
          import.meta.env.VITE_USERS_LOGIN_ENDPOINT,
          values
        );
        alert(`Bienvenido ${response.data.user.name} ${response.data.login}`);
        console.log(response);
        dispatch(setLogin(response.data.login));
        dispatch(setUser(response.data.user));
        navigate("/");
      } catch (error) {
        console.error("Error:", error);
      }
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("El nombre de usuario es requerido")
        .min(4, "El nombre de usuario debe tener al menos 4 caracteres")
        .max(20, "Username must not exceed 20 characters"),
      password: Yup.string()
        .required("La contraseña es requerida")
        .min(4, "La contraseña debe tener al menos 4 caracteres")
        .max(20, "Password must not exceed 20 characters"),
    }),
  });

  return (
    <div className={s.login_form_container}>
      <form onSubmit={formik.handleSubmit} className={s.login_form}>
        <div className={s.login_inputs_container}>
          <h1>Iniciar Sesión</h1>
          <div>
            {formik.touched.username && formik.errors.username ? (
              <div className={s.error}>{formik.errors.username}</div>
            ) : (
              <label htmlFor="username">Nombre De Usuario</label>
            )}
            <input
              type="text"
              id="username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className={s.error}>{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit">Login</button>
        </div>
        <div className={s.login_image_container}>
          <img src={RegisterImg} alt="cat-looking-sideways" />
        </div>
      </form>
    </div>
  );
};

export default Login;
