import { user } from "../../data/user.js";
import WhatsappIcon from "../../assets/whatsapp-icon.png";
import LinkedinIcon from "../../assets/linkedin-icon.png";
import GithubIcon from "../../assets/github-icon.png";
import styles from "./style.module.css";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className={styles.footerBox}>
          <div className={styles.footerTop}>
            <h2 className="title md">Contato</h2>
            <div className={styles.footerIcons}>
              <img src={WhatsappIcon} alt="Ícone do Whatsapp" />
              <img src={LinkedinIcon} alt="Ícone do Linkedin" />
              <img src={GithubIcon} alt="Ícone do Github" />
            </div>
          </div>
          <p>{`Todos os direitos reservados - ${user}`}</p>
        </div>
      </div>
    </footer>
  );
}
