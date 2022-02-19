import { NavLink } from "react-router-dom";
import s from "./Header.module.css"

const Header = () => {
  return (
    <header className={s.site__header}>
      <h1 className="visually-hidden">Wehere in the world?</h1>
      <div className={`${s.header__container} ${s.container}`}>
        <NavLink to="/" className="logo-link">
          <b>Wehere in the world?</b>
        </NavLink>
        <button className={s.button} type="button">
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
