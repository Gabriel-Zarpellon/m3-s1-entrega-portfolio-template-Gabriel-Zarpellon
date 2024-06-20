import { technologies } from "../../data/technologies.js";
import { TechList } from "./TechList/index.jsx";
import styles from "./styles.module.css";

export function TechSection() {
  return (
    <section>
      <div className="container">
        <div className={styles.techBox}>
          <h2 className="title md">Tecnologias</h2>
          <ul className={styles.techList}>
            {technologies.map((technology) => (<TechList technology={technology} />))}
          </ul>
        </div>
      </div>
    </section>
  );
}
