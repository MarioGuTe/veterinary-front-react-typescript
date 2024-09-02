import FooterInfo from "../FooterInfo/FooterInfo";
import s from "./style.module.css";

function Footer() {
  return (
    <footer>
      <FooterInfo />
      <div className={s.footer_signature}>
        Copyright ©2024 Todos los derechos resevados CatDogVet
      </div>
    </footer>
  );
}

export default Footer;
