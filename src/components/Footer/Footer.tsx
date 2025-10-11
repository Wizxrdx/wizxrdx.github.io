import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Navigation Links */}
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/education">Education</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
        </ul>

        {/* Social Media Links */}
        <div className={styles.socialLinks}>
          <Link href="https://github.com/Wizxrdx" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/benlabbao" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
          <Link href="https://twitter.com/benlabbao" target="_blank" rel="noopener noreferrer">
            Twitter
          </Link>
        </div>

        {/* Footer Name or Branding */}
        <p className={styles.branding}>© {new Date().getFullYear()} Made with ❤️ by Wizxrdx</p>
      </div>
    </footer>
  );
}