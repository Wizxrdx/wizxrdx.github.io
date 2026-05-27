import styles from "./Section.module.css";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "article";
};

export default function Section({
  as: Component = "section",
  className,
  ...props
}: SectionProps) {
  const classes = [styles.section, className].filter(Boolean).join(" ");
  return <Component className={classes} {...props} />;
}
