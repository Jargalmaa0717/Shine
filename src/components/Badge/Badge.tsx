import React from "react";
import styles from "./Badge.module.css";

export interface BadgeProps {
  label: string;
  constrast: "light" | "dark";
  color:
    | "primary"
    | "secondary"
    | "warning"
    | "destructive"
    | "success"
    | "orchid";
  size: "small" | "medium" | "large" | "xl";
  radius: "default" | "curved";
}

const Badge = (props: BadgeProps) => {
  const { label, constrast, color, size, radius } = props;

  return (
    <div
      className={`${styles["badge-" + constrast + "-" + color]} 
      ${styles["badge-" + size]} ${styles["badge-" + radius]}`}
    >
      {label}
    </div>
  );
};

export default Badge;
