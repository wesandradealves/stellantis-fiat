import React from "react";

import styles from "./styles.module.scss";

interface ItemProps {
  label: string;
  value: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name?: string;
  id?: string;
  label?: string;
  value?: string;
  error?: string | boolean;
  data?: ItemProps[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({
  name,
  id,
  label,
  value,
  error,
  data,
  onChange,
  ...args
}: SelectProps) => {
  return (
    <div className={`${styles.container} ${error ? styles.error : ""}`}>
      {label && <label htmlFor={id}>{label}</label>}
      <div className={styles.wrapper}>
        <select name={name} id={id} value={value} onChange={onChange} {...args}>
          {data &&
            data.map((item: ItemProps, key: number) => (
              <option key={`select-${name}-${key}`} value={item.value}>
                {item.label}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
