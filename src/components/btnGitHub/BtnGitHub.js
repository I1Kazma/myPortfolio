import "./style.css";

import githubBlack from "./gitHub-black.svg";

const BtnGitHub = ({ githubLink }) => {
  return (
    <a
      href={githubLink}
      rel="noreferrer"
      target="_blank"
      className="btn-outline"
    >
      <img src={githubBlack} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
