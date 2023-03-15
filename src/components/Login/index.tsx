import React from "react";
import styles from "./login.module.scss";

const Login = () => {
  return (
    <div className={styles["l-container"]}>
      <div className={styles["l-container__img"]}>
        <img
          src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="food"
        />
        <div className={styles["img-text"]}>
          <p>
            Maecenas mattis egestas
            <span>
              Erdum et malesuada fames ac ante ipsum primis in foucibus
              uspendisse porta
            </span>
          </p>
        </div>
        {/* slideshow button */}
        <ul className={styles["slide-btn"]}>
          <li>
            <button type="button" title="button" className={styles["active"]}></button>
          </li>
          <li>
            <button type="button" title="button"></button>
          </li>
          <li>
            <button type="button" title="button"></button>
          </li>
          <li>
            <button type="button" title="button"></button>
          </li>
        </ul>
      </div>
      <div className={styles["l-container__text"]}>
        <div className={styles["l-container__textbox"]}>
          <h1>EASYMEALS</h1>
          <p>Welcome to EASYMEALS</p>
          <form>
            <div className={styles["input-control"]}>
              <label htmlFor="userName">Users name or Email</label>
              <input  type="text" id="userName" />
            </div>
            <div className={styles["input-control"]}>
              <label htmlFor="password">Password</label>
              <input  type="password" id="password" />
            </div>
            <div className={styles["btn-SignIn"]}>
              <a href="#">Sign In</a>
            </div>
            <p>
              New EASYMEALS? <a href="#">Create Account</a>
            </p>
          </form>
        </div>
      </div>

      <div className={styles["l-container__text"]} style={{ display: "none" }}>
        <div className={styles["l-container__textbox"]}>
          <h1>EasyMeals</h1>
          <p>Welcome to EASYMEALS</p>
          <form>
            <div className={styles["input-control"]}>
              <label htmlFor="userName2">Users name or Email</label>
              <input type="text" id="userName2" />
            </div>
            <div className={styles["input-control"]}>
              <label htmlFor="password2">Password</label>
              <input type="password" id="password2" />
            </div>
            <div className={styles["input-control"]}>
              <label htmlFor="passwordAgain">Password Again</label>
              <input type="password" id="passwordAgain" />
            </div>
            <div className={styles["btn-SignIn"]}>
              <a href="#">Sign Up</a>
            </div>
            <p>
              Already have an account? <a href="#">Sign in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
