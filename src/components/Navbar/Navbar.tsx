"use client";
import Link from "next/link";
import styles from './Navbar.module.css';
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('/');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (page: string) => {
        setCurrentPage(page);
        setIsMenuOpen(false); // Close menu on link click (for mobile)
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <div className={styles.logoContainer}>
                    <Link href="/" className={styles.logo} onClick={() => handleLinkClick('/')}>
                        WizxrdX
                    </Link>
                </div>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    ☰
                </div>
                <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
                    <li className={styles.navItem}>
                        <Link href="/" className={`${styles.navLink} ${currentPage === '/' ? styles.navLinkActive : ''}`} onClick={() => handleLinkClick('/')}>
                        Home
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/experience" className={`${styles.navLink} ${currentPage === '/experience' ? styles.navLinkActive : ''}`} onClick={() => handleLinkClick('/experience')}>
                        Experience
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/projects" className={`${styles.navLink} ${currentPage === '/projects' ? styles.navLinkActive : ''}`} onClick={() => handleLinkClick('/projects')}>
                        Projects
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/education" className={`${styles.navLink} ${currentPage === '/education' ? styles.navLinkActive : ''}`} onClick={() => handleLinkClick('/education')}>
                        Education
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/skills" className={`${styles.navLink} ${currentPage === '/skills' ? styles.navLinkActive : ''}`} onClick={() => handleLinkClick('/skills')}>
                        Skills
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }
