import { technologies } from "../../data/technologies.js";
import { TechList } from "./TechList/index.jsx";
import styles from "./styles.module.css";
import { SectionTemplate } from "../Templates/SectionTemplate/index.jsx";

export function TechSection() {
  return (
    <SectionTemplate>
      <div className={styles.techBox}>
        <h2 className="title md">Tecnologias</h2>
        <ul className={styles.techList}>
          {technologies.map((technology) => (
            <TechList technology={technology} />
          ))}
        </ul>
      </div>
    </SectionTemplate>
  );
}
