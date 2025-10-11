import TextWritingAnimation from '@/components/TextTypingAnimation/TextTypingAnimation';
import styles from './page.module.css'

export default function AboutPage() {
  return (
    <main>
      <section>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>Benedick Labbao</h1>
          <TextWritingAnimation text={["Machine Learning Enthusiast", "Data Scientist", "Problem Solver"]} />
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p>
          I&apos;m a data scientist with a passion for uncovering insights from data. I specialize in machine learning, data
          visualization, and statistical analysis. I enjoy solving complex problems and turning data into actionable insights.
          </p>
        </section>
      </section>
    </main>
  );
}