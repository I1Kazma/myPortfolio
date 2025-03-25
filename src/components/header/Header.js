import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Ivan</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a
          href="https://kaliningrad.hh.ru/resume/3021fe73ff0c4990510039ed1f7344776f5444"
          className="btn"
        >
          My CV
        </a>
      </div>
    </header>
  );
};

export default Header;
