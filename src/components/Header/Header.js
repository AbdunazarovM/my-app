import s from "./Header.module.css"

const Header = () => {
  return (
    <header className={s.site__header}>
      <h1 className="visually-hidden">Wehere in the world?</h1>
      <div className={`${s.header__container} ${s.container}`}>
        <a className="logo-link">
        <img src={logo} />
        </a>
        <button className={s.button} type="button">
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
