import React from "react";
import styles from "./Tooltip.module.css";

export interface TooltipProps {
  constrast: "light" | "dark";
  label: string;
  keystrokes: string;
}

const Tooltip = (props: TooltipProps) => {
  const { label, constrast, keystrokes } = props;

  return (
    <div className={`${styles["tooltip"]} ${styles["tooltip-" + constrast]}`}>
      {label}
      {keystrokes.split(" ").map((char, i) => (
        <div
          key={i}
          className={`${styles["strokebox"]} ${
            styles["keystroke-" + constrast]
          }`}
        >
          {char}
        </div>
      ))}
    </div>
  );
};

export default Tooltip;
