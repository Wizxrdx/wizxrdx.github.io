import Skills from "./skills/page"
import styles from './page.module.css'

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <section id="about">
        <header className={styles.header}>
          <h1 className={styles.title}>Hi, I'm Benedick Labbao</h1>
          <p className={styles.subtitle}>Data Scientist | Machine Learning Enthusiast | Problem Solver</p>
        </header>

        <h2 className={styles.sectionTitle}>About Me</h2>
        <p>
        I'm a data scientist with a passion for uncovering insights from data. I specialize in machine learning, data
        visualization, and statistical analysis. I enjoy solving complex problems and turning data into actionable insights.
        </p>
      </section>
    </main>
  );
}