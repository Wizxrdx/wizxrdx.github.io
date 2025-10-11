import TextWritingAnimation from '@/components/TextTypingAnimation/TextTypingAnimation';
import styles from './page.module.css'
import Link from 'next/link';

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
        <div className={styles.profile}>
        <img className={styles.profileImage} src="/profile.png" alt="Wizxrdx" />
        <div className={`${styles.profileContents} ${'glass-card'}`}>
          <Link href='mailto:benedick.dumol@gmail.com'>
            benedick.dumol@gmail.com
          </Link>
          <Link href='https://github.com/wizxrdx' target='_blank' rel='noopener noreferrer'>
            GitHub
          </Link>
          <Link href='https://www.linkedin.com/in/benedick-labbao/' target='_blank' rel='noopener noreferrer'>
            LinkedIn
          </Link>
        </div>
        </div>
        <p className={styles.sectionBody}>
          Hello! I'm <b>Benedick Labbao</b>, an aspiring <b>Machine Learning Engineer</b> and <b>Full-Stack Developer</b>.
          I am a <b>Computer Engineering</b> undergraduate in <b>Technological Institute of the Philippines - Quezon City</b>,
          Specializing in <b>Data Science</b>. I focus on <b>AI systems</b>, <b>data processing</b>, and <b>end-to-end application development</b>.
        </p>
        <p className={styles.sectionBody}>
          My expertise includes <b>Machine Learning</b>, <b>Deep Learning</b>, <b>Data Analysis</b>, and <b>Full-Stack Development</b>.
          I build AI models, analyze data, and create web applications.
        </p>
        <p className={styles.sectionBody}>
          My hobbies right now include IoT projects, gaming, and exploring new technologies.
        </p>
      </article>
    </div>
  );
}