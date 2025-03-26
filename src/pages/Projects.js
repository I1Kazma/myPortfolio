import Project from "../components/project/Project";
import { projects } from "./../helpers/projectsList";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Основные проекты</h2>
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                img={project.img}
                title={project.title}
                githubLink={project.githubLink}
                index={index}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};
export default Projects;
