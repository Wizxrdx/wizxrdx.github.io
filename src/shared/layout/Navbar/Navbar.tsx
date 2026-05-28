"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname?.startsWith(path) ?? false;
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo} onClick={handleLinkClick}>
            WizxrdX
          </Link>
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ""}`}>
          <li className={styles.navItem}>
            <Link
              href="/"
              className={`${styles.navLink} ${isActive("/") ? styles.navLinkActive : ""}`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/experience"
              className={`${styles.navLink} ${isActive("/experience") ? styles.navLinkActive : ""}`}
              onClick={handleLinkClick}
            >
              Experience
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/projects"
              className={`${styles.navLink} ${isActive("/projects") ? styles.navLinkActive : ""}`}
              onClick={handleLinkClick}
            >
              Projects
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/education"
              className={`${styles.navLink} ${isActive("/education") ? styles.navLinkActive : ""}`}
              onClick={handleLinkClick}
            >
              Education
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/skills"
              className={`${styles.navLink} ${isActive("/skills") ? styles.navLinkActive : ""}`}
              onClick={handleLinkClick}
            >
              Skills
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
