import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import linkedin from "./../../img/icons/linkedIn.svg";
import github from "./../../img/icons/gitHub.svg";
import twitter from "./../../img/icons/twitter.svg";

import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://vk.com/i1kazma">
                <img src={vk} alt="Link" />
              </a>
            </li>

            <li className="social__item">
              <a href="https://github.com/I1Kazma">
                <img src={github} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2025 I1Kazma</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
