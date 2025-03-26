import project01 from "./../img/projects/01.png";
import project01Big from "./../img/projects/01-big.png";

import project02 from "./../img/projects/02.png";
import project02Big from "./../img/projects/02-big.png";

import project03 from "./../img/projects/03.png";
import project03Big from "./../img/projects/03-big.png";

import project04 from "./../img/projects/04.png";
import project04Big from "./../img/projects/04-big.png";

import project05 from "./../img/projects/05.png";
import project05Big from "./../img/projects/05-big.png";

import project06 from "./../img/projects/06.png";
import project06Big from "./../img/projects/06-big.png";

import project07 from "./../img/projects/07.png";
import project07Big from "./../img/projects/07-big.png";

import project08 from "./../img/projects/08.png";
import project08Big from "./../img/projects/08-big.png";

import project09 from "./../img/projects/09.png";
import project09Big from "./../img/projects/09-big.png";

import project10 from "./../img/projects/10.png";
import project10Big from "./../img/projects/10-big.png";

import project11 from "./../img/projects/11.png";
import project11Big from "./../img/projects/11-big.png";

import project12 from "./../img/projects/12.png";
import project12Big from "./../img/projects/12-big.png";

const projects = [
  {
    id: 1,
    title: "SPA-резюме на React",
    description: "Мое небольшое резюме",
    img: project01,
    imgBig: project01Big,
    link: "/",
    skills: "React, HTML, CSS",
    githubLink: "https://github.com/I1Kazma/myPortfolio",
  },
  {
    id: 2,
    title: "SPA приложение крипто-портфеля",
    description:
      "SPA-приложение, которое подгружает данные по API о криптовалютах. Используются компоненты Ant Design 5.0, также присутствует возможность добавления новых криптовалют и удаление старых. Также можно просмотреть информацию по конкретной крипте",
    img: project02,
    imgBig: project02Big,
    link: "https://crypto-biartxhvo-i1kazmas-projects.vercel.app/",
    skills: "React, Ant Design, REST API",
    githubLink: "https://github.com/I1Kazma/crypto-app",
  },
  {
    id: 3,
    title: "SPA-приложение Marvel",
    description:
      "SPA-приложение, использующее MarvelAPI, которое используется для загрузки персонажей на страницу, выводе подробной информации об одном из них, а также выводе рандомного персонажа и информации о нем в шапке",
    img: project04,
    imgBig: project04Big,
    link: "https://marvel-characters-dun.vercel.app/",
    skills: "React, SASS, REST API, custom hooks",
    githubLink: "https://github.com/I1Kazma/Marvel-Characters",
  },
  {
    id: 4,
    title: "SPA-приложение прогноза погоды в разных городах",
    description:
      "SPA-приложение, которое по Weather API берет данные о погоде и выводит их на страницу. Присутствует возможность выбора любого города на планете и вывода погоды, температуры, скорости ветра и иконки погоды на страницу",
    img: project11,
    imgBig: project11Big,
    link: "",
    skills: "React, REST API, SASS",
    githubLink: "https://github.com/I1Kazma/weather-forecast",
  },
  {
    id: 5,
    title: "SPA-приложение формата ToDo",
    description:
      "Первое тестовое приложение, написанное на React. Присутствует возможность удаления и добавления нового сотрудника с зарплатой + добавление отметок о выдаче премии и повышении. Также с помощью поисковой панели и фильтров можно найти нужного сотрудника Вся информация о сотрудниках динамически обновляется в шапке и может быть отредактирована",
    img: project03,
    imgBig: project03Big,
    link: "https://to-do-react-inky-ten.vercel.app/",
    skills: "React",
    githubLink: "https://github.com/I1Kazma/ToDoReact",
  },

  {
    id: 6,
    title: "SPA-лендинг sportnoise.ru",
    description: "",
    img: project05,
    imgBig: project05Big,
    link: "https://sportnoise.ru/",
    skills: "React, SASS, 1C-Bitrix",
    githubLink: "",
  },

  {
    id: 7,
    title: "Сайт glens39.ru",
    img: project12,
    imgBig: project12Big,
    link: "https://glens39.ru/",
    skills: "HTML, SASS, JS, Wordpress",
    githubLink: "",
  },

  {
    id: 11,
    title: "Сайт bs107.ru",
    img: project06,
    imgBig: project06Big,
    link: "https://bs107.ru/",
    skills: "HTML, SASS, JS, ModX",
    githubLink: "",
  },

  {
    id: 8,
    title: "Сайт macromer.ru",
    description: "",
    img: project07,
    imgBig: project07Big,
    link: "https://macromer.ru/",
    skills: "HTML, SASS, JS, Wordpress",
    githubLink: "",
  },
  {
    id: 9,
    title: "Сайт biovat.ru",
    description: "",
    img: project08,
    imgBig: project08Big,
    link: "https://biovat.ru/",
    skills: "HTML, SASS, JS, 1C-Bitrix",
    githubLink: "",
  },
  {
    id: 10,
    title: "Сайт logist4you.ru",
    description: "",
    img: project09,
    imgBig: project09Big,
    link: "https://logist4you.ru/",
    skills: "HTML, SASS, JS, 1C-Bitrix",
    githubLink: "",
  },
  {
    id: 11,
    title: "Сайт hotel-hercules.ru",
    img: project10,
    imgBig: project10Big,
    link: "https://hotel-hercules.ru/",
    skills: "HTML, SASS, JS, Joomla",
    githubLink: "",
  },
];

export { projects };
