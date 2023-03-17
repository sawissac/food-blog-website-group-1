import React from "react";
import styles from "./main.module.scss";
import CardList from "./CardList";
import CardSubscribe from "./CardSubscribe";
import { mockData } from "../../mock-data";

const BlogCard = () => {
  const cardListData = mockData.blogData;
  
  return (
    <section className={styles["p-blog"]}>
      <CardSubscribe />
      <CardList data={cardListData}/>
    </section>
  );
};

export default BlogCard;
