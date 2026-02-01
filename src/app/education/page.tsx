import styles from './page.module.css';

export default function EducationPage() {
    return (
        <div className={styles.container}>
            <title>Education</title>
            <div className={styles.header}>
                <h1 className={styles.headerTitle}>Education</h1>
                <p className={styles.headerSubtitle}>Here is a summary of my educational background</p>
            </div>

            <div className={`${styles.itemContainer} glass-card`}>
                <div className={styles.itemHeaderContainer}>
                    <img className={styles.itemHeaderLogo} src="/TIP.png" alt="T.I.P logo" />
                    <div className={styles.itemHeaderText}>
                        <h3>
                            Technological Institute of the Philippines
                        </h3>
                        <h4>
                            Bachelor of Science in Computer Engineering
                        </h4>
                        <span>
                            Track Elective in Data Science
                        </span>
                    </div>
                    <span className={styles.itemDate}>2021 - 2025</span>
                </div>
                <div className={styles.itemBodyContainer}>
                    <p className={styles.itemContent}>
                        <strong>Relevant Coursework</strong><br/>Advanced Machine Learning and Deep Learning, Predictive Analytics using ML,
                        Software Design, Computer Networks, Operating Systems, Data Structures and Algorithms, Database 
                        Management System, Application Development & Automation, Mobile App Development, Quantum Computing Fundamentals and Applications.
                    </p>
                    <p>
                        <strong>Organizations</strong>
                        <br/>(2021 - 2025) Institute of Computer Engineers of the Philippines - Student Edition (ICpEP.se) - Member
                        <br/>(2024 - 2025) Microsoft Student Community - Member
                    </p>
                </div>
            </div>

            <div className={`${styles.itemContainer} glass-card`}>
                <div className={styles.itemHeaderContainer}>
                    <img className={styles.itemHeaderLogo} src="/aitech.png" alt="AiTECH logo" />
                    <div className={styles.itemHeaderText}>
                        <h3>
                            Antipolo Institute of Technology
                        </h3>
                        <h4>
                            Academic Track
                        </h4>
                        <span>
                            Science, Technology, Engineering and Mathematics (STEM) Strand
                        </span>
                    </div>
                    <span className={styles.itemDate}>2019 - 2021</span>
                </div>
                <div className={styles.itemBodyContainer}>
                    <p className={styles.itemContent}>
                        <strong>Relevant Coursework</strong>
                        <br/>Pre-Calculus, Physics, Technical Drafting, General Chemistry, Earth Science
                    </p>
                </div>
            </div>

        </div>
    )
}