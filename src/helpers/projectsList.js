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

import project13 from "./../img/projects/13.png";
import project13Big from "./../img/projects/13-big.png";

import project14 from "./../img/projects/14.png";
import project14Big from "./../img/projects/14-big.png";

const projects = [
    {
    id: 1,
    title: "SPA E-commerce shop (in development)",
    description: "An SPA of e-commerce shop (in development)",
    img: project14,
    imgBig: project14Big,
    link: "https://e-commerce-i1-kazma.vercel.app/",
    skills: "React, OAuth, TypeScript, Next.js, Tailwind, REST API, Zustand",
    githubLink: "https://github.com/I1Kazma/e-commerce_shop",
  },
  {
    id: 2,
    title: "SPA Social Network",
    description: "Social network SPA application based on React, SASS, REST API, MongoDB with the ability to register, authorize, and add posts. Plans: online chat",
    img: project13,
    imgBig: project13Big,
    link: "/",
    skills: "React, SASS, REST API, MongoDB, Postman, Express, Mongoose, Axios",
    githubLink: "https://github.com/I1Kazma/social-web",
  },
  {
    id: 3,
    title: "SPA CV",
    description: "My resume",
    img: project01,
    imgBig: project01Big,
    link: "/",
    skills: "React, SASS, API",
    githubLink: "https://github.com/I1Kazma/myPortfolio",
  },
  {
    id: 4,
    title: "SPA Crypto",
    description:
      "An SPA application that loads data via API about cryptocurrencies. Ant Design 5.0 components are used, and there is also the ability to add new cryptocurrencies and remove old ones. You can also view information on a specific crypt",
    img: project02,
    imgBig: project02Big,
    link: "https://crypto-biartxhvo-i1kazmas-projects.vercel.app/",
    skills: "React, Ant Design, REST API",
    githubLink: "https://github.com/I1Kazma/crypto-app",
  },
  {
    id: 5,
    title: "SPA Marvel",
    description:
      "An SPA application using MarvelAPI, which is used to load characters on the page, displays detailed information about one of them, and also displays a random character and its information in the header.",
    img: project04,
    imgBig: project04Big,
    link: "https://marvel-characters-dun.vercel.app/",
    skills: "React, SASS, REST API, custom hooks",
    githubLink: "https://github.com/I1Kazma/Marvel-Characters",
  },
  {
    id: 6,
    title: "SPA-приложение прогноза погоды в разных городах",
    description:
      "An SPA application that uses the Weather API to take weather data and display it on the page. There is the ability to select any city on the planet and display weather, temperature, wind speed and weather icons on the page",
    img: project11,
    imgBig: project11Big,
    link: "",
    skills: "React, REST API, SASS",
    githubLink: "https://github.com/I1Kazma/weather-forecast",
  },
  {
    id: 7,
    title: "SPA ToDo",
    description:
      "The first test application written in React. There is the possibility of deleting and adding a new employee with a salary + adding notes on bonuses and promotions. Also, using the search panel and filters, you can find the desired employee. All information about employees is dynamically updated in the header and can be edited",
    img: project03,
    imgBig: project03Big,
    link: "https://to-do-react-inky-ten.vercel.app/",
    skills: "React",
    githubLink: "https://github.com/I1Kazma/ToDoReact",
  },

  {
    id: 8,
    title: "Sportnoise.ru",
    description: "",
    img: project05,
    imgBig: project05Big,
    link: "https://sportnoise.ru/",
    skills: "React, SASS, 1C-Bitrix",
    githubLink: "",
  },

  {
    id: 9,
    title: "Glens39.ru",
    img: project12,
    imgBig: project12Big,
    link: "https://glens39.ru/",
    skills: "HTML, SASS, JS, Wordpress",
    githubLink: "",
  },

  {
    id: 10,
    title: "bs107.ru",
    img: project06,
    imgBig: project06Big,
    link: "https://bs107.ru/",
    skills: "HTML, SASS, JS, ModX",
    githubLink: "",
  },

  {
    id: 11,
    title: "Macromer.ru",
    description: "",
    img: project07,
    imgBig: project07Big,
    link: "https://macromer.ru/",
    skills: "HTML, SASS, JS, Wordpress",
    githubLink: "",
  },
  {
    id: 12,
    title: "Biovat.ru",
    description: "",
    img: project08,
    imgBig: project08Big,
    link: "https://biovat.ru/",
    skills: "HTML, SASS, JS, 1C-Bitrix",
    githubLink: "",
  },
  {
    id: 13,
    title: "Logist4you.ru",
    description: "",
    img: project09,
    imgBig: project09Big,
    link: "https://logist4you.ru/",
    skills: "HTML, SASS, JS, 1C-Bitrix",
    githubLink: "",
  },
  {
    id: 14,
    title: "Hotel-hercules.ru",
    img: project10,
    imgBig: project10Big,
    link: "https://hotel-hercules.ru/",
    skills: "HTML, SASS, JS, Joomla",
    githubLink: "",
  },
];

export { projects };
