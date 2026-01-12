import Link from 'next/link';
import styles from './page.module.css';
import CredlyBadge from '@/lib/CredlyBadge';
import DataCampBadge from '@/lib/DataCampBadge';

export default function SkillsPage() {
    return (
        <div className={styles.container}>
            <title>Skills</title>
            <div className={styles.header}>
                <h1 className={styles.headerTitle}>Skills</h1>
                <p className={styles.headerBody}>Here are some of my skills</p>
            </div>

            <div className={styles.skillsSetContainer}>
                
                <div className={`${styles.skillsSet} ${'glass-card'}`}>
                    <h4 className={styles.skillsSetTitle} >Programming Languages</h4>
                    <span>Python</span>
                    <span>TypeScript</span>
                    <span>Dart</span>
                    <span>PHP</span>
                    <span>C++</span>
                    <span>SQL</span>
                </div>

                <div className={`${styles.skillsSet} ${'glass-card'}`}>
                    <h4 className={styles.skillsSetTitle} >Machine Learning & Deep Learning</h4>
                    <span>Google AutoML</span>
                    <span>TensorFlow</span>
                    <span>PyTorch</span>
                    <span>Scikit-learn</span>
                    <span>OpenCV</span>
                    <span>YOLO</span>
                </div>

                <div className={`${styles.skillsSet} ${'glass-card'}`}>
                    <h4 className={styles.skillsSetTitle} >Data Analysis & Visualization</h4>
                    <span>Pandas</span>
                    <span>NumPy</span>
                    <span>Matplotlib</span>
                    <span>Seaborn</span>
                    <span>Statsmodels</span>
                    <span>SciPy</span>
                </div>

                <div className={`${styles.skillsSet} ${'glass-card'}`}>
                    <h4 className={styles.skillsSetTitle} >Frameworks & Libraries</h4>
                    <span>FastAPI</span>
                    <span>Next.js</span>
                    <span>Flask</span>
                    <span>Flutter</span>
                    <span>React-Native</span>
                </div>

                <div className={`${styles.skillsSet} ${'glass-card'}`}>
                    <h4 className={styles.skillsSetTitle} >Tools & Technologies</h4>
                    <span>OpenAI</span>
                    <span>Kaggle</span>
                    <span>Jupyter Notebook</span>
                    <span>Git</span>
                    <span>Docker</span>
                    <span>Postman</span>
                    <span>Firebase</span>
                    <span>AWS</span>
                    <span>Selenium</span>
                    <span>Qiskit</span>
                </div>

                <div className={`${styles.skillsSet} ${'glass-card'}`}>
                    <h4 className={styles.skillsSetTitle} >Soft Skills</h4>
                    <span>Problem Solving</span>
                    <span>Detail Oriented</span>
                    <span>Adaptability</span>
                    <span>Time Management</span>
                </div>

            </div>

            <div className={styles.header}>
                <h1 className={styles.headerTitle}>Certifications & Badges</h1>
            </div>
            <div className={`${styles.certificateContainer} ${'glass-card'}`}>
                <DataCampBadge badgeId='SQA0019944136022' image='https://media.datacamp.com/legacy/Certification/Badges%202024/outline/SQL_Associate_-_badge_with_outline.png' />

                {/* DevNet Associate */}
                <CredlyBadge badgeId='dd9678c6-d493-45f1-b6b1-0c86d0446b82' />
                {/* CCNA: ENSA */}
                <CredlyBadge badgeId='c89d5ad3-e197-4d79-9584-a1f83f99d9d7' />
                {/* CCNA: ITN */}
                <CredlyBadge badgeId='1c2ccbe0-9795-43e3-9f9b-63b70416b841' />
                {/* Python Essentials 1 */}
                <CredlyBadge badgeId='566e5867-caf4-41af-b821-7d0bcc998e15' />
                {/* JavaScript Essentials 1 */}
                <CredlyBadge badgeId='373fd021-431f-4cab-876c-d76e24bfff45' />
                {/* IT Essentials */}
                <CredlyBadge badgeId='ef64b661-2e6b-42d4-8c58-33077c6570d2' />

            </div>
      </div>
    )
}