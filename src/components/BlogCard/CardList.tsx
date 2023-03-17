import React from "react";
import styles from "./main.module.scss";
import CardListItem from "./CardListItem";
import { BlogData } from "../../context/mock-data";

type Props = {
  data: BlogData[];
};

const CardList: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles["p-blog__card-list"]}>
      {data.map((i, index) => {
        return (
          <CardListItem
            key={index}
            mins={i.mins}
            title={i.title}
            src={i.url}
            id={i.id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
