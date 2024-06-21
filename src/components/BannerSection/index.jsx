import { username } from "../../data/user.js";
import BannerImg from "../../assets/banner-img.png";
import styles from "./style.module.css";
import { SectionTemplate } from "../Templates/SectionTemplate/index.jsx";

export function BannerSection() {
  return (
    <SectionTemplate>
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
    </SectionTemplate>
  );
}
