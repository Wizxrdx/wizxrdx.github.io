"use client";
import Link from "next/link";
import styles from './Navbar.module.css';
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <Link href="/" className={styles.logo} onClick={() => setIsMenuOpen(false)}>
                    WizxrdX
                </Link>
            </div>
            <div className={styles.hamburger} onClick={toggleMenu}>
                ☰
            </div>
            <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
                <li className={styles.navItem}>
                    <Link href="/projects" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                    Projects
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/education" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                    Education
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/skills" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                    Skills
                    </Link>
                </li>
            </ul>
        </nav>
        );
    }
