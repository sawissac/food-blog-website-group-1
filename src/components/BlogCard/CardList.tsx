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
      {data.map((blog, index) => {
        return (
          <CardListItem
            key={index}
            mins={blog.mins}
            title={blog.title}
            src={blog.url}
            id={blog.id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
