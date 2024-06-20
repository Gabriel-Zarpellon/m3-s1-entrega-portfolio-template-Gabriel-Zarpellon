import styles from "./styles.module.css";

export function TechList({ technology }) {
  return (
    <li className={styles.techCard}>
      <img src={technology.img} alt={`Tecnologia ${technology.name}`} />
      <h3 className="title sm">{technology.name}</h3>
    </li>
  );
}
