import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactsContainer}>

        <a
          href="https://wa.me/5512981676321"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactItem}
        >
          <span className={styles.contactIcon}><FaWhatsapp /></span>
          <span className={styles.contactText}>+55 (12) 98167-6321</span>
        </a>

        <div 
          className={styles.contactItem}
        >
          <span className={styles.contactIcon}><FaEnvelope /></span>
          <span className={styles.contactText}>pedrohenribeiro04@gmail.com</span>
        </div>
      </div>
      
      <div className={styles.socialContainer}>
        <a 
          href="https://github.com/pedrohenribeiro" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.socialLink}
          title="GitHub"
        >
          <FaGithub />
        </a>

        <a 
          href="https://www.linkedin.com/in/pedrohenribeiro1/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.socialLink}
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} Pedro Henrique Ribeiro. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;