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
<<<<<<< HEAD
        <p className={styles["p-detail__text-postdate"]}>
          DECEMBER 7.2014,<span> 23 COMMENTS</span>, POSTED IN : <span>CINNAMON</span>, <span>GINGERBREAD</span>,{" "}
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
=======
        <p className={styles["p-detail__text-description"]}>{desc}</p>
>>>>>>> 59231535f150e9278f8c2f92b627ba88f7ca579d
      </div>
      <div className={styles["Button"]}>
        <button>Read More</button>
      </div>
<<<<<<< HEAD
    </div>
  )}
=======
    </section>
  );
};
>>>>>>> 59231535f150e9278f8c2f92b627ba88f7ca579d

export default Detail