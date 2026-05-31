import styles from './page.module.css';
import Card from '@/shared/ui/Card/Card';

export default function EducationPage() {
    return (
        <div className={styles.container}>
            <title>Education</title>
            <div className={styles.header}>
                <h1 className={styles.headerTitle}>Education</h1>
                <p className={styles.headerSubtitle}>Here is a summary of my educational background</p>
            </div>

            <Card className={styles.itemContainer}>
                <div className={styles.itemHeaderContainer}>
                    <img
                        className={styles.itemHeaderLogo}
                        src="/TIP.png"
                        alt="T.I.P logo"
                        width={300}
                        height={200}
                        decoding="async"
                    />
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
                    <p>
                        <strong>Projects/Researches Worked On</strong>
                        <br />Machine Learning Project: <a href="/projects#covid-quarantine-prediction">COVID-19 Symptom-Based Quarantine Prediction</a>
                        <br />Deep Learning Project: <a href="/projects#exercise-posture-suggestion-system">Exercise Posture Suggestion System</a>
                        <br />Final Year Project: <a href="/projects#mosquito-monitoring-system">AI-Powered Mosquito Monitoring System</a>
                    </p>
                    <p>
                        <strong>Organizations</strong>
                        <br/>(2021 - 2025) Institute of Computer Engineers of the Philippines - Student Edition (ICpEP.se) - Member
                        <br/>(2024 - 2025) Microsoft Student Community - Member
                    </p>
                </div>
            </Card>

            <Card className={styles.itemContainer}>
                <div className={styles.itemHeaderContainer}>
                    <img
                        className={styles.itemHeaderLogo}
                        src="/aitech.png"
                        alt="AiTECH logo"
                        width={300}
                        height={200}
                        decoding="async"
                    />
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
            </Card>

        </div>
    )
}