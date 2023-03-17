import React from "react";
import styles from "./crudtool.module.scss";

type Props = {
  name: string;
  placeHolder: string;
  type: string;
  value?: string;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput: React.FC<Props> = ({ name, placeHolder, type, onChange,value }) => {
  return (
    <div className={styles['tool-container__input']}>
      <input type={type} onChange={onChange} placeholder={placeHolder} id={name} value={value}/>
    </div>
  );
};

export default FormInput;
