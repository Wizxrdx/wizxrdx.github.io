import Link from 'next/link';
import styles from './page.module.css';

export default function ProjectsPage() {
    return (
        <div className={styles.container}>
            <title>Projects</title>
            <div className={styles.header}>
                <h1 className={styles.headerTitle}>Projects</h1>
                <p className={styles.headerBody}>Here are some of my projects showcasing my skills and expertise</p>
            </div>
            <div className={styles.itemContainer}>

                {/* <div className={`${styles.item} ${'glass-card'}`}>
                    <img className={styles.itemImagePreview} src="https://raw.githubusercontent.com/Wizxrdx/nasa-space-apps-2025/refs/heads/main/assets/home_page_1.png" alt="test" />
                    <div className={styles.itemContent}>
                        <h2 className={styles.itemTitle} >GitHub Portfolio Website</h2>
                        <p className={styles.itemDesc}>A personal website showcasing my projects and skills.</p>
                        <div className={styles.itemTags}>
                            <span>Next.js</span>
                            <span>TypeScript</span>
                            <span>CSS</span>
                            <span>Next.js</span>
                            <span>TypeScript</span>
                            <span>CSS</span>
                            <span>Next.js</span>
                            <span>TypeScript</span>
                            <span>CSS</span>
                            <span>Next.js</span>
                            <span>TypeScript</span>
                            <span>CSS</span>
                        </div>
                        <div className={styles.itemFeatures}>
                            <h4>Features:</h4>
                        <ul>
                            <li>Personal Website</li>
                            <li>Open Source</li>
                            <li>Web Development</li>
                            <li className={styles.itemHeaderDate}>January 2024 - Present</li>
                        </ul>
                        </div>
                        <div className={styles.itemButton}>
                            <Link href="/projects/hybrid-exoplanet-recognition" target="_blank" rel="noopener noreferrer" className={styles.code}>Code</Link>
                            <Link href="/projects/hybrid-exoplanet-recognition" target="_blank" rel="noopener noreferrer" className={styles.youtube}>Demo</Link>
                            <Link href="/projects/hybrid-exoplanet-recognition" target="_blank" rel="noopener noreferrer" className={styles.visit}>Visit</Link>
                            <Link href="/projects/hybrid-exoplanet-recognition" target="_blank" rel="noopener noreferrer" className={styles.paper}>Paper</Link>
                        </div>
                    </div>
                </div> */}

                {/* <div className={`${styles.item} ${'glass-card'}`}>
                    <iframe className={styles.itemVideoPreview} src="https://www.youtube.com/embed/" title='Video Demo'></iframe>
                    <div className={styles.itemContent}>
                        <h2 className={styles.itemTitle} >GitHub Portfolio Website</h2>
                        <p className={styles.itemDesc}>A personal website showcasing my projects and skills.</p>
                        <div className={styles.itemTags}>
                            <span>Next.js</span>
                            <span>TypeScript</span>
                            <span>CSS</span>
                            <span>Next.js</span>
                            <span>TypeScript</span>
                            <span>CSS</span>
                            <span>Next.js</span>
                            <span>TypeScript</span>
                            <span>CSS</span>
                            <span>Next.js</span>
                            <span>TypeScript</span>
                            <span>CSS</span>
                        </div>
                        <div className={styles.itemFeatures}>
                            <h4>Features:</h4>
                        <ul>
                            <li>Personal Website</li>
                            <li>Open Source</li>
                            <li>Web Development</li>
                            <li className={styles.itemHeaderDate}>January 2024 - Present</li>
                        </ul>
                        </div>
                        <div className={styles.itemButton}>
                            <Link href="/projects/hybrid-exoplanet-recognition" target="_blank" rel="noopener noreferrer" className={styles.code}>Code</Link>
                            <Link href="/projects/hybrid-exoplanet-recognition" target="_blank" rel="noopener noreferrer" className={styles.youtube}>Demo</Link>
                            <Link href="/projects/hybrid-exoplanet-recognition" target="_blank" rel="noopener noreferrer" className={styles.visit}>Visit</Link>
                            <Link href="/projects/hybrid-exoplanet-recognition" target="_blank" rel="noopener noreferrer" className={styles.paper}>Paper</Link>
                        </div>
                    </div>
                </div> */}

                <div className={`${styles.item} ${'glass-card'}`}>
                    <iframe className={styles.itemVideoPreview} src="https://www.youtube.com/embed/5agHeSbKPbs" title='Hybrid Exoplanet Recognition and Model Evaluation System'></iframe>
                    <div className={styles.itemContent}>
                        <h2 className={styles.itemTitle} >Hybrid Exoplanet Recognition and Model Evaluation System - HERMES</h2>
                        <p className={styles.itemDesc}>HERMES is a web application designed for the <strong>NASA Space Apps Challenge 2025</strong>, helping users classify exoplanet candidates efficiently. It allows users to upload or edit exoplanet datasets and run a machine learning model to identify confirmed planets, potential candidates, or false positives.</p>
                        <div className={styles.itemTags}>
                            <span>Web Application</span>
                            <span>Predictive Analytics & Model Retraining</span>
                            <span>Ensemble Technique</span>
                            <span>Machine Learning</span>
                            <span>XGBoost</span>
                            <span>Next.js</span>
                            <span>Python</span>
                            <span>FastAPI</span>
                            <span>Docker</span>
                        </div>
                        <div className={styles.itemFeatures}>
                            <h4>Features:</h4>
                        <ul>
                            <li>Exoplanet Classification Engine</li>
                            <li>Dataset Upload & Editing</li>
                            <li>Interactive Visual Analytics</li>
                            <li>Manual Model Retraining</li>
                            <li>Web-Based Interface</li>
                        </ul>
                        </div>
                        <div className={styles.itemButton}>
                            <Link href="https://github.com/Wizxrdx/nasa-space-apps-2025" target="_blank" rel="noopener noreferrer" className={styles.code}>Code</Link>
                            <Link href="https://www.youtube.com/watch?v=5agHeSbKPbs" target="_blank" rel="noopener noreferrer" className={styles.youtube}>Demo</Link>
                            <Link href="https://dev.wizxrdx.me/nasa-space-apps-2025" target="_blank" rel="noopener noreferrer" className={styles.visit}>Visit</Link>
                        </div>
                    </div>
                </div>

                <div className={`${styles.item} ${'glass-card'}`}>
                    <iframe className={styles.itemVideoPreview} src="https://www.youtube.com/embed/ZG2r1KPy5RM" title='AI-Powered Mosquito Monitoring System'></iframe>
                    <div className={styles.itemContent}>
                        <h2 className={styles.itemTitle} >AI-Powered Mosquito Monitoring System</h2>
                        <p className={styles.itemDesc}>Research and prototype of an attractant-based trap with image recognition to identify Aedes mosquitoes, with a companion mobile app for real-time location monitoring and notifications. The system&apos;s detection accuracy was evaluated under engineering performance and efficiency constraints.</p>
                        <div className={styles.itemTags}>
                            <span>Internet of Things</span>
                            <span>Object Detection</span>
                            <span>Computer Vision</span>
                            <span>Deep Learning</span>
                            <span>Mobile Application</span>
                            <span>TensorFlow</span>
                            <span>PyTorch</span>
                            <span>OpenCV</span>
                            <span>Python</span>
                            <span>Firebase</span>
                        </div>
                        <div className={styles.itemFeatures}>
                            <h4>Features:</h4>
                        <ul>
                            <li>Deep learning-based Aedes detection</li>
                            <li>Integrated image capture and classification</li>
                            <li>GPS geotagging of trap location</li>
                            <li>Mobile app alerts and monitoring</li>
                        </ul>
                        </div>
                        <div className={styles.itemButton}>
                            <Link href="https://github.com/Wizxrdx/mosquito-detection" target="_blank" rel="noopener noreferrer" className={styles.code}>Code</Link>
                            <Link href="https://www.youtube.com/watch?v=ZG2r1KPy5RM" target="_blank" rel="noopener noreferrer" className={styles.youtube}>Demo</Link>
                        </div>
                    </div>
                </div>

                <div className={`${styles.item} ${'glass-card'}`}>
                    <iframe className={styles.itemVideoPreview} src="https://www.youtube.com/embed/SsIo-v1et94" title='Smart Packaging Control & Demand Forecasting Web Application'></iframe>
                    <div className={styles.itemContent}>
                        <h2 className={styles.itemTitle} >Smart Packaging Control & Demand Forecasting Web Application</h2>
                        <p className={styles.itemDesc}>Developed a web application deployed on a Raspberry Pi to remotely monitor and control a packaging machine. Integrated a SARIMA forecasting model into the app to predict daily packaging demand, achieving a 4.61% MAPE. The project scope focused solely on the software and system integration.</p>
                        <div className={styles.itemTags}>
                            <span>Industrial Automation</span>
                            <span>Predictive Analytics & Model Retraining</span>
                            <span>Time Series Forecasting</span>
                            <span>Data Logging & Monitoring</span>
                            <span>Web Application</span>
                            <span>Python</span>
                            <span>Flask</span>
                            <span>statsmodels</span>
                            <span>pandas</span>
                            <span>SQLite</span>
                        </div>
                        <div className={styles.itemFeatures}>
                            <h4>Features:</h4>
                        <ul>
                            <li>Automated packaging process with real-time monitoring and control</li>
                            <li>Intelligent demand forecasting using SARIMA with monthly retraining</li>
                            <li>IoT-enabled Raspberry Pi integration for seamless machine operation</li>
                            <li>Data-driven optimization of packaging workflow and production tracking</li>
                        </ul>
                        </div>
                        <div className={styles.itemButton}>
                            <Link href="https://github.com/Wizxrdx/charcoal-forecasting-app" target="_blank" rel="noopener noreferrer" className={styles.code}>Code</Link>
                            <Link href="https://www.youtube.com/watch?v=SsIo-v1et94" target="_blank" rel="noopener noreferrer" className={styles.youtube}>Demo</Link>
                        </div>
                    </div>
                </div>

                <div className={`${styles.item} ${'glass-card'}`}>
                    <img className={styles.itemImagePreview} src="/image1.png" alt="Exercise Posture Suggestion System" />
                    <div className={styles.itemContent}>
                        <h2 className={styles.itemTitle} >Exercise Posture Suggestion System</h2>
                        <p className={styles.itemDesc}>An Exercise Posture Suggestion System using deep learning to analyze and provide real-time feedback on correct exercise posture. Integrated pose estimation, human activity recognition, and error detection algorithms to offer personalized guidance. The software interface, built in Unity, allows users to visualize correct postures and optimize workouts, aiming to reduce injury risk and improve exercise effectiveness.</p>
                        <div className={styles.itemTags}>
                            <span>Real-Time Feedback Systems</span>
                            <span>Deep Learning</span>
                            <span>Pose Estimation</span>
                            <span>Human Activity Recognition</span>
                            <span>Error Detection</span>
                            <span>Python</span>
                            <span>Unity</span>
                            <span>TensorFlow</span>
                            <span>PyTorch</span>
                            <span>imageio</span>
                            <span>einops</span>
                        </div>
                        <div className={styles.itemFeatures}>
                            <h4>Features:</h4>
                        <ul>
                            <li>Real-time exercise posture analysis with deep learning</li>
                            <li>Pose estimation using ResNet-50, YOLOv8, and YOLO-NAS</li>
                            <li>Human activity recognition with Conv(2+1)D, 3D CNN, and CNN-BiLSTM</li>
                            <li>Interactive Unity interface for feedback and posture visualization</li>
                        </ul>
                        </div>
                        <div className={styles.itemButton}>
                            <Link href="https://github.com/Wizxrdx/Project_Exercise_Posture_Correction/" target="_blank" rel="noopener noreferrer" className={styles.code}>Code</Link>
                            <Link href="https://github.com/Wizxrdx/Project_Exercise_Posture_Correction/blob/main/Research_Paper/Mendoza_Labbao_Final_Project_DATA_SCI.pdf" target="_blank" rel="noopener noreferrer" className={styles.paper}>Paper</Link>
                        </div>
                    </div>
                </div>
                
            </div>
      </div>
    )
}