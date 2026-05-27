import styles from "./ProjectButton.module.css";

type ProjectButtonGroupProps = React.HTMLAttributes<HTMLDivElement>;

export default function ProjectButtonGroup({ className, ...props }: ProjectButtonGroupProps) {
  const classes = [styles.buttonContainer, className].filter(Boolean).join(" ");
  return <div className={classes} {...props} />;
}
