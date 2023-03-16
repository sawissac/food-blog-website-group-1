import React from "react";
import styles from "./main.module.scss";

const CardSubscribe = () => {
  return (
    <div className={styles["p-blog__subscribe"]}>
      <p>
        Get My CookBook <u>Free</u> Today!
      </p>
      <div>
        <input type="text" placeholder="Your Name*"></input>
        <input type="text" placeholder="Your Email*"></input>
        <button>SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default CardSubscribe;
