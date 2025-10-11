import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Navigation Links */}
        <ul className={styles.navLinks}>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/education">Education</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
        </ul>

        {/* Social Media Links */}
        <div className={styles.socialLinks}>
          <a href="https://github.com/Wizxrdx" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/benlabbao" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com/benlabbao" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>

        {/* Footer Name or Branding */}
        <p className={styles.branding}>© {new Date().getFullYear()} Made with ❤️ by Wizxrdx</p>
      </div>
    </footer>
  );
}