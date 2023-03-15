import React from "react";
import styles from "./detail.module.scss";

const Detail = () => {
  return (
    <div className={styles["p-detail"]}>
      <div
        className={styles["p-detail__image"]}
        style={{
          backgroundImage:
            "url('https://i2.wp.com/gatherforbread.com/wp-content/uploads/2014/01/Whole-Grain-Bread-Copy.jpg')",
        }}
      ></div>
      <div className={styles["p-detail__recipes-bloc"]}>
        <div>RECIPES</div>
        <div> SUNDAY BRUNCH </div>
      </div>
      <h1>SUNDAY BRUNCH : HOLIDAY GINGERBREAD CARDAMOM WAFFLES RECIPE</h1>
      <div className={styles["p-detail__text"]}>
        <p className={styles["p-detail__text-postdate"]}>
          DECEMBER 7.2014.23 <span>COMMENTS</span>, POSTED IN : <span>CINNAMON</span>, <span>GINGERBREAD</span>,{" "}
          <span>HOLIDAY</span>, <span>WAFFLES</span>
        </p>
        <p className={styles["p-detail__text-description"]}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quam nemo consequuntur maxime ipsam placeat
          porro ratione ut dolorum nobis, fugit expedita pariatur eveniet eius itaque ab amet earum quasi repellat velit
          accusamus reprehenderit natus sunt. Illum, voluptatibus. Quas quis nulla nihil eligendi aut vero. Quae, alias.
          A odio molestias, dolorum illo officiis quidem cupiditate sed et facere ad aperiam excepturi nesciunt eum
          tempora dicta iure nobis minus doloribus, accusamus dolores commodi? Eos, nulla? Nostrum consectetur placeat,
          enim, commodi non mollitia expedita saepe blanditiis tempore excepturi rem aliquam a repudiandae totam?
          Voluptas quisquam ducimus aut nam, aperiam sunt eum! Suscipit.
        </p>
      </div>
      <div className={styles["Button"]}>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Detail;
