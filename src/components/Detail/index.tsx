import React from "react";
import styles from "./detail.module.scss";
import { mockData } from "../../mock-data";

const Detail = () => {
  const selectedData = mockData.mockData.filter((i) => i.id === 4);
  const { desc, recipe, title, url } = selectedData[0];
  return (
    <section className={styles["p-detail"]}>
      <div className={styles["p-detail__image"]}>
        <div role="img" title="blur-img" style={{ backgroundImage: `url('${url}')` }} />
        <div role="img" title="img" style={{ backgroundImage: `url('${url}')` }} />
      </div>
      <div className={styles["p-detail__recipes-bloc"]}>
        <div>RECIPES</div>
        <div> {recipe} </div>
      </div>
      <h1>{title}</h1>
      <div className={styles["p-detail__text"]}>
        <p className={styles["p-detail__text-description"]}>{desc}</p>
      </div>
      <div className={styles["Button"]}>
        <button>Read More</button>
      </div>
    </section>
  );
};

export default Detail