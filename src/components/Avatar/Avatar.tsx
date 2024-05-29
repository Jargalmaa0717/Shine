import React from "react";
import styles from "./Avatar.module.css";

export interface AvatarProps {
  label: string;
  contrast: "light" | "dark";
  size: "2xsmall" | "xsmall" | "small" | "base" | "large" | "xlarge";
  type: "rounded" | "squared";
  content: "letters" | "image" | "icon";
  src?: string; // Optional src prop for image content
}

const Avatar = (props: AvatarProps) => {
  const { label, contrast, size, type, content, src } = props;

  if (content === "image" && src) {
    return (
      <img
        src={src}
        alt={label}
        className={`${styles["avatar-" + contrast]} 
        ${styles["avatar-" + size]} ${styles["avatar-" + type]} ${
          styles["avatar-" + content]
        }`}
      />
    );
  }

  return (
    <div
      className={`${styles["avatar-" + contrast]} 
      ${styles["avatar-" + size]} ${styles["avatar-" + type]} ${
        styles["avatar-" + content]
      }`}
      style={{ textAlign: "center" }}
    >
      {label}
    </div>
  );
};

export default Avatar;
