import GitIcon from "../../../assets/git-icon.png";
import styles from "./style.module.css";

export function ProjectsList({ project }) {
  return (
    <li className={styles.projectCard}>
      <div className={styles.projectCardBox}>
        <div className={styles.projectCardTop}>
          <h3 className="title sm">{project.name}</h3>
          <img src={GitIcon} alt="Ícone do Git" />
          <p>{project.description}</p>
        </div>
        <a className="link" href="#">Saiba mais</a>
      </div>
    </li>
  );
}
