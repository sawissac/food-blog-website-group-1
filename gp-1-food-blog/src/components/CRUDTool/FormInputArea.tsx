import React from "react";
import styles from "./crudtool.module.scss";

type Props = {
  placeHolder: string;
  value?: string;
  onChange?: (ev: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea: React.FC<Props> = ({ placeHolder, onChange,value }) => {
  return (
    <div className={styles['tool-container__area-input']}>
      <textarea onChange={onChange} placeholder={placeHolder} value={value}/>
    </div>
  );
};

export default Textarea;
