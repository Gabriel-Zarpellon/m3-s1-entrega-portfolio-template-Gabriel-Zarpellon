import PortfolioImg from "../../assets/portfolio.png";
import styles from "./style.module.css";

export function Header() {
  return (
    <header>
      <div className="container">
        <div className={styles.headerBox}>
          <img src={PortfolioImg} alt="Logo do Portfólio" />
          <nav className={styles.headerNav}>
            <a href="">Sobre</a>
            <a href="">Stacks</a>
            <a href="">Projetos</a>
          </nav>
          <button>Contato</button>
        </div>
      </div>
    </header>
  );
}
