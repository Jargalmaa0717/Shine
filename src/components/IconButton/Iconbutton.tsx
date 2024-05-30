import React from "react";
import styles from "./Iconbutton.module.css";


export interface iconbuttonProps {
  label: string;
  constrast: "light" | "dark";
  state: "default" | "hover" | "selected" | "focus" | "disabled";
  size: "2xsmall" | "xsmall" | "small" | "base" | "large" | "xlarge";
  style: "primary" | "transparent" | "primary muted" | "transparent muted";
}

const iconbutton = (props: iconbuttonProps) => {
  const { label, constrast, state, size, style} = props;

  return ( 
    <button
      className={`${styles["iconbutton-" + constrast]}
    ${styles["iconbutton-" + constrast + "-" + state + "-" + size + "-" + style]} 
    ]}`}
    >
      {label}
    </button>
  );
};

export default iconbutton;
