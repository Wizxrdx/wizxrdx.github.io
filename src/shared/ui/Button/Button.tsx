import type React from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButtonProps = CommonProps &
  React.ComponentPropsWithoutRef<"button"> & {
    href?: undefined;
  };

type ButtonAsLinkProps = CommonProps &
  React.ComponentPropsWithoutRef<"a"> & {
    href: string;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export default function Button(props: ButtonProps) {
  const classes = [
    styles.button,
    styles[props.variant ?? "primary"],
    styles[props.size ?? "md"],
    props.className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in props) {
    const { variant, size, className, ...anchorProps } =
      props as ButtonAsLinkProps;
    return <a className={classes} {...anchorProps} />;
  }

  const { variant, size, className, ...buttonProps } =
    props as ButtonAsButtonProps;
  return <button className={classes} {...buttonProps} />;
}
