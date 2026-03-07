import Link from "next/link";
import styles from "./ProjectButtons.module.css";

type PaperButtonProps = {
  href: string;
};

export default function PaperButton({ href }: PaperButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.buttonBase} ${styles.paperButton}`}
    >
      Paper
    </Link>
  );
}
