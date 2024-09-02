import { Twirl as Hamburger } from "hamburger-react";
import s from "./NavHamburger.module.css";
type Props = {
  onItemClick: (prop: boolean) => void;
};

function HamburgerIcon({ onItemClick }: Props) {
  return (
    <div className={s.burger_icon}>
      <Hamburger
        size={26}
        distance="sm"
        color="#000000"
        rounded
        onToggle={onItemClick}
      />
    </div>
  );
}

export default HamburgerIcon;
