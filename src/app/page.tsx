import TextWritingAnimation from '@/shared/ui/TextTypingAnimation/TextTypingAnimation';
import styles from './page.module.css'
import Link from 'next/link';
import SlidingPicture from '@/shared/ui/SlidingPicture/SlidingPicture';
import ProjectButton from '@/shared/ui/ProjectButton/ProjectButton';
import ProjectButtonGroup from '@/shared/ui/ProjectButton/ProjectButtonGroup';
import Card from '@/shared/ui/Card/Card';
import Section from '@/shared/ui/Section/Section';

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

      <Section as="article" className={styles.section}>
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
          My hobbies right now include <b>IoT projects</b>, <b>gaming</b>, and exploring new technologies. Currently learning about AI Development on edge devices and Agentic AI.
        </p>
        <p className={styles.sectionBody}>
          If you have any inquiries, question or suggestions, you can reach me out via email at <b>benedick.dumol@gmail.com</b> or any of my social media accounts.</p>
      </Section>

      <Card className={styles.feature}>
        <h2>My Latest Project</h2>
        <h3>Hybrid Exoplanet Recognition and Model Evaluation System - HERMES</h3>
        <p>
          HERMES is a web application designed for the NASA Space Apps Challenge 2025, helping users classify exoplanet candidates efficiently. It allows users to upload or edit exoplanet datasets and run a machine learning model to identify confirmed planets, potential candidates, or false positives.
        </p>
        <ProjectButtonGroup style={{ justifyContent: 'center' }}>
          <ProjectButton variant="code" href="https://github.com/Wizxrdx/nasa-space-apps-2025" />
          <ProjectButton variant="demo" href="https://www.youtube.com/watch?v=5agHeSbKPbs" />
          <ProjectButton variant="visit" href="https://dev.wizxrdx.me/nasa-space-apps-2025" />
        </ProjectButtonGroup>
        <SlidingPicture
          images={[
            "https://raw.githubusercontent.com/Wizxrdx/nasa-space-apps-2025/refs/heads/main/assets/home_page_1.png",
            "https://raw.githubusercontent.com/Wizxrdx/nasa-space-apps-2025/refs/heads/main/assets/data_page.png",
            "https://raw.githubusercontent.com/Wizxrdx/nasa-space-apps-2025/refs/heads/main/assets/classification_page.png",
            "https://raw.githubusercontent.com/Wizxrdx/nasa-space-apps-2025/refs/heads/main/assets/home_page_5.png"
          ]}
        />
      </Card>

      <Section>
        <Card className={styles.feature}>
        <h2>Project that I enjoy working on</h2>
        <h3>Smart Packaging Control & Demand Forecasting Web Application</h3>
        <p>
          I enjoyed working on this project as it allowed me to apply my skills in machine learning, web development and embedded systems to create a solution for smart packaging control and demand forecasting.
        </p>
        <ProjectButtonGroup style={{ justifyContent: 'center' }}>
          <ProjectButton variant="code" href="https://github.com/Wizxrdx/charcoal-forecasting-app" />
          <ProjectButton variant="demo" href="https://www.youtube.com/watch?v=SsIo-v1et94" />
        </ProjectButtonGroup>
        <SlidingPicture
          images={[
            "https://raw.githubusercontent.com/Wizxrdx/charcoal-forecasting-app/refs/heads/main/resources/login_page.png",
            "https://raw.githubusercontent.com/Wizxrdx/charcoal-forecasting-app/refs/heads/main/resources/dashboard.png",
            "https://raw.githubusercontent.com/Wizxrdx/charcoal-forecasting-app/refs/heads/main/resources/analytics.png",
          ]}
        />
      </Card>
      <Card className={styles.feature}>
        <h2>My Most Ambitious Project</h2>
        <h3>AI-Powered Mosquito Monitoring System</h3>
        <p>
          This is my final year project for my Computer Engineering degree. It is a system that uses AI to detect mosquitoes and provide insights and analytics on mosquito populations. it&apos;s my most ambitious project to date because it involves building a complete end-to-end system that includes hardware, software, and AI components. Training of the model was difficult due to the lack of available datasets. I also had to optimize the model to run efficiently on edge devices, which was a challenging task. Overall, this project was a great learning experience and allowed me to apply my skills in AI, embedded systems, and software development.
        </p>
        <ProjectButtonGroup style={{ justifyContent: 'center' }}>
          <ProjectButton variant="code" href="https://github.com/Wizxrdx/mosquito-detection" />
          <ProjectButton variant="demo" href="https://www.youtube.com/watch?v=ZG2r1KPy5RM" />
        </ProjectButtonGroup>
        <SlidingPicture
          images={[
            "https://raw.githubusercontent.com/Wizxrdx/wizxrdx.github.io/refs/heads/master/public/prototype.png",
            "https://raw.githubusercontent.com/Wizxrdx/wizxrdx.github.io/refs/heads/master/public/testing_data.png",
            "https://raw.githubusercontent.com/Wizxrdx/wizxrdx.github.io/refs/heads/master/public/notification_data.png",
            "https://raw.githubusercontent.com/Wizxrdx/wizxrdx.github.io/refs/heads/master/public/final_design.png",
          ]}
        />
      </Card>
      </Section>
    </div>
  );
}