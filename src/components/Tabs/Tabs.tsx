import React from "react";
import styles from "./Tabs.module.css";

export interface TabsProps {
  label: string;
  constrast: "light" | "dark";
  state: "default" | "hover" | "selected" | "focus";
}

const Tabs = (props: TabsProps) => {
  const { label, constrast, state } = props;

  return (
    <div
      className={`${styles["tabs-" + constrast]}
    ${styles["tabs-" + constrast + "-" + state]} 
    ]}`}
    >
      {label}
    </div>
  );
};

export default Tabs;
