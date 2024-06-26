import { projects } from "../../data/projects.js";
import { ProjectsList } from "./ProjectsList/index.jsx";
import styles from "./style.module.css";
import { SectionTemplate } from "../Templates/SectionTemplate/index.jsx";

export function ProjectSection() {
  return (
    <SectionTemplate>
      <div className={styles.projectBox}>
        <h2 className="title md">Projetos</h2>
        <ul className={styles.projectList}>
          {projects.map((project) => (
            <ProjectsList project={project} />
          ))}
        </ul>
      </div>
    </SectionTemplate>
  );
}
