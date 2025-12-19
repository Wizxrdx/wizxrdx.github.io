import styles from './page.module.css'

export default function ExperiencePage() {
    return (
        <div className={styles.container}>
            <title>Experience</title>
            <div className={styles.header}>
                <h1 className={styles.headerTitle}>Experience</h1>
                <p className={styles.headerBody}>Here are some of my professional experiences and work history</p>
            </div>

            <div className={`${styles.item} ${'glass-card'}`}>
                <div className={styles.itemHeader}>
                    <img className={styles.itemHeaderLogo} src="/ollopa.jpg" alt="Ollopa Corporation" />
                    <div className={styles.itemHeaderTitle}>
                        <h2>Data Entry</h2>
                        <h3>Ollopa Corporation</h3>
                        <p>Quezon City, Philippines</p>
                    </div>
                    <div className={styles.itemHeaderTags}>
                        <div>
                            <h4>Remote</h4>
                            <h4>Internship</h4>
                        </div>
                        <p className={styles.itemHeaderDate}>June 2025 - August 2025</p>
                    </div>
                </div>
                <div className={styles.itemBody}>
                    <ul className={styles.itemBodyList}>
                        <li>Collaborated with cross-functional teams to complete assigned tasks.</li>
                        <li>Maintained high accuracy and attention to detail in data entry tasks.</li>
                        <li>Communicated effectively with team members and supervisors.</li>
                        <li>Adapted to new tools and technologies quickly to enhance productivity.</li>
                    </ul>
                    <div className={styles.itemBodyTags}>
                        <span>Excel</span> <span>Data Entry</span> <span>Communication</span> <span>Teamwork</span> <span>Adaptability</span>
                    </div>
                </div>
            </div>
        </div>
    )
}