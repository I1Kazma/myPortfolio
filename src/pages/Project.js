import { useParams } from "react-router-dom";
import { projects } from "../helpers/projectsList";

import BtnGitHub from "../components/btnGitHub/BtnGitHub";

const Project = () => {
  const { id } = useParams();

  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <div className="project-details__desc">
            {project.description && <p>{project.description}</p>}
            {project.link && (
              <a target="_blank" href={project.link}>
                Ссылка на сайт
              </a>
            )}
          </div>

          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Навыки: {project.skills}</p>
          </div>
          {project.githubLink && <BtnGitHub link={project.githubLink} />}
        </div>
      </div>
    </main>
  );
};
export default Project;
