import React, { useContext } from "react";
import styles from "./main.module.scss";
import CardList from "./CardList";
import CardSubscribe from "./CardSubscribe";
import { AppContext } from "../../context/appContext";

const BlogCard = () => {
  const mockData = useContext(AppContext);
  
  return (
    <section className={styles["p-blog"]}>
      <CardSubscribe />
      <CardList data={mockData.blogData}/>
    </section>
  );
};

export default BlogCard;
