import TextWritingAnimation from '@/components/TextTypingAnimation/TextTypingAnimation';
import styles from './page.module.css'

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <title>About Me</title>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Benedick Labbao</h1>
        <div className={styles.headerBody}>
          <TextWritingAnimation text={["Machine Learning Enthusiast", "Data Scientist", "Problem Solver"]} /> 
        </div>
      </div>

      <article className={styles.section}>
        <img className={styles.profileImage} src="/profile.png" alt="Wizxrdx" />
        <p className={styles.sectionBody}>
          Entry-level Machine Learning and Full-Stack Developer with hands-on experience in
          AI systems, data processing, and end-to-end application development.
        </p>
      </article>
    </div>
  );
}