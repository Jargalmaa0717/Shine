import React from "react";
import styles from "./StatusBadge.module.css";

export interface StatusBadgeProps {
  label: string;
  constrast: "light" | "dark";
  color:
    | "primary"
    | "secondary"
    | "warning"
    | "destructive"
    | "success"
    | "orchid";
}

const StatusBadge = (props: StatusBadgeProps) => {
  const { label, constrast, color } = props;

  return (
    <div
      className={`${styles["statusbadge-" + constrast]}
                            ${styles["statusbadge-text"]}`}
    >
      <div
        className={`${styles["statusbadge-" + color]}
                                 ${styles["statusbadge-icon"]}`}
      ></div>
      {label}
    </div>
  );
};

export default StatusBadge;
