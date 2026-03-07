import Link from "next/link";
import styles from "./ProjectButtons.module.css";

type VisitButtonProps = {
  href: string;
};

export default function VisitButton({ href }: VisitButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.buttonBase} ${styles.visitButton}`}
    >
      Visit
    </Link>
  );
}
