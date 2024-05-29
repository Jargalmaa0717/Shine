import React, { useState } from "react";
import styles from "./TextField.module.css";

export interface TextFieldProps {
  label: string;
  contrast: "light" | "dark";
  size: "base" | "small";
  error?: boolean;
}

const TextField = (props: TextFieldProps) => {
  const { label, contrast, size, error = false } = props;
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <input
      placeholder={label}
      value={value}
      onChange={handleChange}
      className={`
        ${styles["txtfield-" + size]} 
        ${styles["txtfield-" + contrast]}
        ${error ? styles.error : ""}
        ${value ? styles.filled : ""}
      `}
    />
  );
};

export default TextField;
