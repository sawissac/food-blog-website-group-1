import React from "react";
import styles from "./crudtool.module.scss";

type Props = {
  value?: string;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
};
const Button: React.FC<Props> = ({ value, onClick }) => {
  return (
    <button type="button" className={styles["tool-container__button"]} title={value?.toLowerCase()} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
