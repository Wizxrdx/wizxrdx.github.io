import Link from "next/link";
import styles from "./ProjectButtons.module.css";

type DemoButtonProps = {
  href: string;
};

export default function DemoButton({ href }: DemoButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.buttonBase} ${styles.demoButton}`}
    >
      Demo
    </Link>
  );
}
