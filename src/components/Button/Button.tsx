import React from "react";
import styles from "./Button.module.css";

export interface ButtonProps {
  label: string;
  color: "primary" | "secondary" | "destructive" | "gray";
  size: "small" | "medium" | "large";
  variant: "filled" | "outline" | "text";
}

const Button = (props: ButtonProps) => {
  const { label, size, color, variant } = props;

  return (
    <button
      className={`${styles["btn-" + size]} 
                               ${styles["btn-" + variant + "-" + color]}
                               `}
    >
      {label}
    </button>
  );
};

export default Button;
