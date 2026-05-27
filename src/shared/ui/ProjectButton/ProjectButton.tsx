import Link from "next/link";
import styles from "./ProjectButton.module.css";

type ProjectButtonVariant = "code" | "demo" | "visit" | "paper";

type ProjectButtonProps = {
  href: string;
  variant: ProjectButtonVariant;
  label?: string;
  className?: string;
};

const variantConfig: Record<ProjectButtonVariant, { label: string; className: string }> = {
  code: { label: "Code", className: styles.codeButton },
  demo: { label: "Demo", className: styles.demoButton },
  visit: { label: "Visit", className: styles.visitButton },
  paper: { label: "Paper", className: styles.paperButton },
};

export default function ProjectButton({ href, variant, label, className }: ProjectButtonProps) {
  const config = variantConfig[variant];
  const classes = [styles.buttonBase, config.className, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {label ?? config.label}
    </Link>
  );
}
