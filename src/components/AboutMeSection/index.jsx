import styles from "./styles.module.css";

export function AboutMeSection() {
  return (
    <section>
      <div className="container">
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
      </div>
    </section>
  );
}
