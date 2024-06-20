import { projects } from "../../data/projects.js";
import { ProjectsList } from "./ProjectsList/index.jsx";
import styles from "./style.module.css";

export function ProjectSection() {
  return (
    <section>
      <div className="container">
        <div className={styles.projectBox}>
          <h2 className="title md">Projetos</h2>
          <ul className={styles.projectList}>
            {projects.map((project) => (<ProjectsList project={project} />))}
          </ul>
        </div>
      </div>
    </section>
  );
}
