import React from "react";
import styles from "./main.module.scss";
import CardListItem from "./CardListItem";

type Props = {
  data: any[];
};

const CardList: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles["p-blog__card-list"]}>
      {data.map((i, index) => {
        return (
          <CardListItem
            key={index}
            mins="30:00"
            title="Baked sweet potatoes with creamy avocado&pumpkin"
            src={i.url}
          />
        );
      })}
    </div>
  );
};

export default CardList;
