import React from "react";
import styles from "./main.module.scss";
const Main2 = () => {
  return (
    <div className={styles["p-blog"]}>
      <div className={styles["p-blog__subscribe"]}>
        <p>
          Get My CookBook <u>Free</u> Today!
        </p>
        <form>
          <input type="text" placeholder="Your Name*"></input>
          <input type="text" placeholder="Your Email*"></input>
          <button>SUBSCRIBE</button>
        </form>
      </div>
      <div className={styles["p-blog__card-list"]}>
        <div className={styles["p-blog__inner"]}>
          <div className={styles["p-blog__img"]}>
            <img
              src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/01/food-photography-blogs-dark.jpg"
              alt="Food Photo"
            ></img>
          </div>
          <div className={styles["p-blog__icon"]}>
            <i className="fa-regular fa-clock"></i>
            <span>30Minutes</span>
            <i className="fa-regular fa-thumbs-up"></i>
            <span>Super Easy</span>
          </div>
          <div className={styles["p-blog__text"]}>
            <a href="#">Baked sweet potatoes with creamy avocado&pumpkin</a>
          </div>
        </div>
        <div className={`${styles["p-blog__inner"]}`}>
          <div className={styles["p-blog__img"]}>
            <img
              src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/01/food-photography-blogs-dark.jpg"
              alt="Food Photo"
            ></img>
          </div>
          <div className={styles["p-blog__icon"]}>
            <i className="fa-regular fa-clock"></i>
            <span>30Minutes</span>
            <i className="fa-regular fa-thumbs-up"></i>
            <span>Super Easy</span>
          </div>
          <div className={styles["p-blog__text"]}>
            <a href="#">Baked sweet potatoes with creamy avocado&pumpkin</a>
          </div>
        </div>
        <div className={styles["p-blog__inner"]}>
          <div className={styles["p-blog__img"]}>
            <img
              src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/01/food-photography-blogs-dark.jpg"
              alt="Food Photo"
            ></img>
          </div>
          <div className={styles["p-blog__icon"]}>
            <i className="fa-regular fa-clock"></i>
            <span>30Minutes</span>
            <i className="fa-regular fa-thumbs-up"></i>
            <span>Super Easy</span>
          </div>
          <div className={styles["p-blog__text"]}>
            <a href="#">Baked sweet potatoes with creamy avocado&pumpkin</a>
          </div>
        </div>
        <div className={styles["p-blog__inner"]}>
          <div className={styles["p-blog__img"]}>
            <img
              src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/01/food-photography-blogs-dark.jpg"
              alt="Food Photo"
            ></img>
          </div>
          <div className={styles["p-blog__icon"]}>
            <i className="fa-regular fa-clock"></i>
            <span>30Minutes</span>
            <i className="fa-regular fa-thumbs-up"></i>
            <span>Super Easy</span>
          </div>
          <div className={styles["p-blog__text"]}>
            <a href="#">Baked sweet potatoes with creamy avocado&pumpkin</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main2;
