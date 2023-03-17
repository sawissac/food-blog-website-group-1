import React from "react";
import styles from "./main.module.scss";
import { Link } from "react-router-dom";

type Props = {
  src: string;
  mins: string;
  title: string;
  id: number;
};

const CardListItem: React.FC<Props> = ({ id, src, mins, title }) => {

  return (
    <div className={styles["p-blog__inner"]}>
      <Link to={`/detail/${id}`} title={title}>
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
          <p>{title.length > 50 ? title.substring(0, 40) + "..." : title}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardListItem;
