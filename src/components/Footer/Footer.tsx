import Link from "next/link";
import styles from "./Footer.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin, faXTwitter, faKaggle } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Social Media Links */}
        <div className={styles.socialLinks}>
          <Link href="https://github.com/Wizxrdx" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className={styles.icon} icon={faSquareGithub} />
          </Link>
          <Link href="https://linkedin.com/in/benlabbao" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
          </Link>
          <Link href="https://twitter.com/benlabbao" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className={styles.icon} icon={faXTwitter} />
          </Link>
          <Link href="https://www.kaggle.com/benedicklabbao" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className={styles.icon} icon={faKaggle} />
          </Link>
        </div>
        {/* Footer Name or Branding */}
        <p className={styles.branding}>© {new Date().getFullYear()} Made with ❤️ by Wizxrdx</p>
      </div>
    </footer>
  );
}