import styles from "./styles.module.css";
import { SectionTemplate } from "../Templates/SectionTemplate";

export function AboutMeSection() {
  return (
    <SectionTemplate>
      <div className={styles.aboutMeBox}>
        <div className={styles.aboutSectionTitle}>
          <h2 className="title md">Sobre mim</h2>
        </div>
        <div className={styles.aboutSectionParagraph}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex
            magna, imperdiet sodales sem quis, sollicitudin lobortis purus.
            Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis
            pharetra, vehicula enim in, suscipit nisi. Mauris eget sapien a
            velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis
            turpis, at feugiat orci.
          </p>
        </div>
      </div>
    </SectionTemplate>
  );
}
