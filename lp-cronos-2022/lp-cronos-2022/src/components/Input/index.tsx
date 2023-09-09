import React from "react";

import styles from "./styles.module.scss";

interface InputProps {
  name?: string;
  id?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  error?: string | boolean;
  small?: boolean;
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  name,
  id,
  label,
  type = "text",
  placeholder,
  value,
  error,
  small,
  maxLength,
  onChange,
  onBlur,
  ...args
}: InputProps) => {
  return (
    <div
      className={`${styles.container} ${error ? styles.error : ""} ${
        small ? styles.small : ""
      }`}
    >
      {<label htmlFor={id}>{label}</label>}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={error ? String(error) : placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        maxLength={maxLength}
        {...args}
      />
    </div>
  );
};

export default Input;
