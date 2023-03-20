import React, { useContext } from "react";
import styles from "./detail.module.scss";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../context/appContext";

const Detail = () => {
  const { id } = useParams();
  const { blogData } = useContext(AppContext);
  const [selectedData] = blogData.filter((i) => i.id === Number(id));
  const { desc, recipe, title, url } = selectedData;

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <section className={styles["p-detail"]}>
      <div className={styles["p-detail__nav"]}>
        <Link to={"/"}>
          Home
        </Link>
        <span>
          {
            selectedData.recipe
          }
        </span>
      </div>
      <div className={styles["p-detail__image"]}>
        <div
          role="img"
          title="blur-img"
          style={{ backgroundImage: `url('${url}')` }}
        />
        <div
          role="img"
          title="img"
          style={{ backgroundImage: `url('${url}')` }}
        />
      </div>
      <div className={styles["p-detail__recipes-bloc"]}>
        <div>Recipes</div>
        <div> {recipe} </div>
      </div>
      <h1>{title}</h1>
      <div className={styles["p-detail__text"]}>
        <p className={styles["p-detail__text-description"]}>{desc}</p>
      </div>
    </section>
  );
};

export default Detail