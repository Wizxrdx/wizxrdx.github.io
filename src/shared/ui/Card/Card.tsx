import styles from "./Card.module.css";

type CardVariant = "glass" | "plain";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
};

export default function Card({
  variant = "glass",
  className,
  ...props
}: CardProps) {
  const classes = [styles.card, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  return <div className={classes} {...props} />;
}
