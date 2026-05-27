import TextWritingAnimation from '@/shared/ui/TextTypingAnimation/TextTypingAnimation';
import styles from './page.module.css'
import Link from 'next/link';
import SlidingPicture from '@/components/SlidingPicture/SlidingPicture';
import ProjectButton from '@/shared/ui/ProjectButton/ProjectButton';
import ProjectButtonGroup from '@/shared/ui/ProjectButton/ProjectButtonGroup';
import Card from '@/shared/ui/Card/Card';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <title>About Me</title>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Benedick Labbao</h1>
        <div className={styles.headerBody}>
          <TextWritingAnimation text={["Full Stack Developer", "ML Engineer", "Data Scientist", "Problem Solver", "Computer Engineer"]} /> 
        </div>
      </div>

      <article className={styles.section}>
        <div className={styles.profile}>
          <img
            className={styles.profileImage}
            src="/profile.jpg"
            alt="Wizxrdx"
            width={300}
            height={300}
            decoding="async"
          />

          <Card className={styles.profileContents}>
            <Link href='mailto:benedick.dumol@gmail.com'>
              benedick.dumol@gmail.com
            </Link>
            <Link href='https://github.com/wizxrdx' target='_blank' rel='noopener noreferrer'>
              GitHub
            </Link>
            <Link href='https://www.linkedin.com/in/benedick-labbao/' target='_blank' rel='noopener noreferrer'>
              LinkedIn
            </Link>
            <Link href='https://www.kaggle.com/benedicklabbao' target='_blank' rel='noopener noreferrer'>
              Kaggle
            </Link>
            <Link href='https://twitter.com/benlabbao' target='_blank' rel='noopener noreferrer'>
              X (Twitter)
            </Link>
          </Card>
        </div>
        <p className={styles.sectionBody}>
          Hello! I&apos;m <b>Benedick Labbao</b>, an aspiring <b>Machine Learning Engineer</b> and <b>Full-Stack Developer</b>.
          I am a <b>Computer Engineering</b> undergraduate at the <b>Technological Institute of the Philippines - Quezon City</b>,
          with a track elective in <b>Data Science</b>. I focus on <b>AI systems</b>, <b>data processing</b>, and <b>end-to-end application development</b>.
        </p>
        <p className={styles.sectionBody}>
          I build <b>AI Models</b>, <b>analyze data</b>, <b>build pipelines</b>, and <b>create web applications</b>.
          My expertise spans <b>Machine Learning</b>, <b>Deep Learning</b>, <b>Data Analysis</b>, <b>Predictive Analysis</b>, and <b>Full-Stack Development</b>.
        </p>
        <p className={styles.sectionBody}>
          My hobbies right now include IoT projects, gaming, and exploring new technologies. Currently learning about Frontend Development, Agentic AI and RAG.
        </p>
        <p className={styles.sectionBody}>
          You can reach me out via email at <b>benedick.dumol@gmail.com</b> or any of my social media accounts.</p>
      </article>

      <Card className={styles.feature}>
        <h2>My Latest Project</h2>
        <h3>Hybrid Exoplanet Recognition and Model Evaluation System - HERMES</h3>
        <p>
          HERMES is a web application designed for the NASA Space Apps Challenge 2025, helping users classify exoplanet candidates efficiently. It allows users to upload or edit exoplanet datasets and run a machine learning model to identify confirmed planets, potential candidates, or false positives.
        </p>
        <ProjectButtonGroup>
          <ProjectButton variant="code" href="https://github.com/Wizxrdx/nasa-space-apps-2025" />
          <ProjectButton variant="demo" href="https://www.youtube.com/watch?v=5agHeSbKPbs" />
          <ProjectButton variant="visit" href="https://dev.wizxrdx.me/nasa-space-apps-2025" />
        </ProjectButtonGroup>
        <SlidingPicture />
      </Card>
    </div>
  );
}