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
              src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Basic-Homemade-Bread_EXPS_TOHcom20_32480_C01_26_2b-20.jpg"
              alt="Food Photo"></img>
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
              src="https://th.bing.com/th/id/OIP.qdHqnzuqEI4cZ-VPs260XgHaHa?pid=ImgDet&rs=1"
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
              src="https://th.bing.com/th/id/OIP.PvEb8JGKc1RpcWIhYT9UawHaHa?pid=ImgDet&rs=1"
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
              src="https://1.bp.blogspot.com/-8JEbSC3yGFk/WH9K8d8k1YI/AAAAAAAABuY/W5GefHmAbxAJG5ebtx0yCOdh919NT8kwQCLcB/s400/IMG_7147.jpg"
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
