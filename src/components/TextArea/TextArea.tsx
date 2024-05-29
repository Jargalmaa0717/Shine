import React, { useState } from "react";
import styles from "./TextArea.module.css";

export interface TextAreaProps {
  label: string;
  contrast: "light" | "dark";
  size: "base" | "small";
  initialError?: boolean;
}

const TextArea = (props: TextAreaProps) => {
  const { label, contrast, size, initialError = false } = props;
  const [value, setValue] = useState("");
  const [error, setError] = useState(initialError);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    // Example error condition: set error if the value contains forbidden characters
    const forbiddenCharacters = /[^a-zA-Z0-9 ]/;
    if (forbiddenCharacters.test(newValue)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <textarea
      placeholder={label}
      value={value}
      onChange={handleChange}
      className={`
        ${styles["txtarea-" + size]} 
        ${styles["txtarea-" + contrast]}
        ${error ? styles.error : ""}
        ${value ? styles.filled : ""}
      `}
    />
  );
};

export default TextArea;
