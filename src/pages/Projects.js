import Project from "../components/project/Project";
import { projects } from "./../helpers/projectsList";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project) => {
            return (
              <Project
                key={project.id}
                img={project.img}
                title={project.title}
                githubLink={project.githubLink}
                index={project.id}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};
export default Projects;
