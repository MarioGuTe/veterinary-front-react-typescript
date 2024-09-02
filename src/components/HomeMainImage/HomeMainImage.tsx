import s from "./style.module.css";
import mainImg from "../../assets/images/home-main-image-medium.jpg";
function HomeMainImage() {
  return (
    <div className={s.img_container}>
      <img src={mainImg} alt="dogs and cats" />
    </div>
  );
}

export default HomeMainImage;
