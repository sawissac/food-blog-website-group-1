import React from "react";
import styles from "./main.module.scss";

type Props = {
  src: string;
  mins: string;
  title: string;
};

const CardListItem: React.FC<Props> = ({ src, mins, title }) => {
  return (
    <div className={styles["p-blog__inner"]}>
      <div className={styles["p-blog__img"]}>
        <img src={src} alt={title} />
      </div>
      <div className={styles["p-blog__icon"]}>
        <i className="fa-brands fa-readme"></i>
        <span>{mins}</span>
        <i className="fa-regular fa-thumbs-up"></i>
        <span>Super Easy</span>
      </div>
      <div className={styles["p-blog__text"]}>
        <p>{title}</p>
      </div>
      <a href="#"></a>
    </div>
  );
};

export default CardListItem;
