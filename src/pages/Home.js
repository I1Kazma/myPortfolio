import Header from "../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <h2 className="title-2">Мои навыки</h2>
            <ul className="content-list__items">
              <li className="content-list__item">
                <div className="s-icons">
                  <i className="bx bxl-html5"></i>
                </div>
                <h3>HTML5</h3>
              </li>

              <li className="content-list__item">
                <div className="s-icons">
                  <i className="bx bxl-css3"></i>
                </div>
                <h3>CSS3</h3>
              </li>

              <li className="content-list__item">
                <div className="s-icons">
                  <i className="bx bxl-sass"></i>
                </div>
                <h3>SASS</h3>
              </li>

              <li className="content-list__item">
                <div className="s-icons">
                  <i className="bx bxl-javascript"></i>
                </div>
                <h3>JavaScript</h3>
              </li>

              <li className="content-list__item">
                <div className="s-icons">
                  <i className="bx bxl-jquery"></i>
                </div>
                <h3>jQuery</h3>
              </li>

              <li className="content-list__item">
                <div className="s-icons">
                  <i className="bx bxl-react"></i>
                </div>
                <h3>ReactJS</h3>
              </li>

              <li className="content-list__item">
                <div className="s-icons">
                  <i className="bxl bx-next-js"></i>
                </div>
                <h3>Next.js</h3>
              </li>

              <li className="content-list__item">
                <div className="s-icons">
                  <i className="bx bxl-redux"></i>
                </div>
                <h3>Redux</h3>
              </li>

               <li className="content-list__item">
                <div className="s-icons">
                  <i className="bx bxl-mongodb"></i>
                </div>
                <h3>MongoDb</h3>
              </li>

              <li className="content-list__item">
                <div className="s-icons">
                  <i className="bx bxl-php"></i>
                </div>
                <h3>PHP</h3>
              </li>

  

              <li className="content-list__item">
                <div className="s-icons">
                  <i className="bx bx-package"></i>
                </div>
                <h3>Webpack</h3>
              </li>

               

    
            </ul>
          </ul>
        </div>
      </main>
    </>
  );
};
export default Home;
