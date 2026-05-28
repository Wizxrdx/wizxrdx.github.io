"use client";

import styles from "./VisitorCounter.module.css";

type VisitorCounterProps = {
  label?: string;
};

export default function VisitorCounter({ label = "Visitors" }: VisitorCounterProps) {
  return <p className={styles.footerText}>{label}: coming soon</p>;
}
