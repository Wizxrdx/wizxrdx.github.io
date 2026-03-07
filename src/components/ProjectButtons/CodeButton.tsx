import Link from "next/link";
import styles from "./ProjectButtons.module.css";

type CodeButtonProps = {
  href: string;
};

export default function CodeButton({ href }: CodeButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.buttonBase} ${styles.codeButton}`}
    >
      Code
    </Link>
  );
}
