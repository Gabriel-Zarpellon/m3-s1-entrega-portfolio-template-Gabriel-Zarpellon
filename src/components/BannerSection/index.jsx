import { username } from "../../data/user.js";
import BannerImg from "../../assets/banner-img.png";
import styles from "./style.module.css";

export function BannerSection() {
  return (
    <section>
      <div className="container">
        <div className={styles.bannerBox}>
          <div className={styles.bannerLeft}>
            <p className="label">{username}</p>
            <h1 className="title lg">Bem vindo ao meu portfólio</h1>
            <p className={styles.bannerParagraph}>
              Uma frase interessante sobre mim
            </p>
            <button>Saiba mais</button>
          </div>
          <img src={BannerImg} alt="Banner do portfólio" />
        </div>
      </div>
    </section>
  );
}
