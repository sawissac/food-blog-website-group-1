import React, { useContext } from "react";
import styles from "./main.module.scss";
import CardList from "./CardList";
import CardSubscribe from "./CardSubscribe";
import { AppContext } from "../../context/appContext";

const BlogCard = () => {
  const { blogData } = useContext(AppContext);

  return (
    <section className={styles["p-blog"]}>
      <CardSubscribe />
      <CardList data={blogData} />
    </section>
  );
};

export default BlogCard;
