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
                    <img className={styles.itemHeaderLogo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/f/fe/20241223164003%21T.I.P._Logo.png/120px-T.I.P._Logo.png" alt="T.I.P logo" />
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
                    <img className={styles.itemHeaderLogo} src="https://scontent.fmnl43-1.fna.fbcdn.net/v/t39.30808-6/302424011_489352479863924_4633747691815234831_n.png?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=CJs-2sqIbv0Q7kNvwG0xtjE&_nc_oc=AdmretrKCyfSiPmKvITlrb_2JkjTwmR5_1Sd2SUehVjqLWcxudOtqQVcRERIvfxtVdM&_nc_zt=23&_nc_ht=scontent.fmnl43-1.fna&_nc_gid=T8mOmiYtdfUG88NtD4HjAA&oh=00_Afd7LQFGLndcAf3OVj1E25k_KjIUVuijhDROsXOBvYKKfg&oe=68F3B2FF" alt="AiTECH logo" />
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