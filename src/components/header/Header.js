import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Привет, меня зовут <em>Иван</em>
          </strong>
          <br />
          frontend-разработчик
        </h1>
        <div className="header__text">
          <p>со страстью к обучению и творчеству</p>
        </div>
        <a
          href="https://kaliningrad.hh.ru/resume/3021fe73ff0c4990510039ed1f7344776f5444"
          className="btn"
        >
          Мое резюме
        </a>
      </div>
    </header>
  );
};

export default Header;
