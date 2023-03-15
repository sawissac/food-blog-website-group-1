import React from "react";
import styles from "./login.module.scss";

const Login = () => {
  return (
    <div className={styles["p-login-form"]}>
      <div className={styles["p-login-form__img"]}>
        <div
          className={styles["p-login-form__img-con"]}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60')",
          }}
        ></div>
        <div className={styles["p-login-form__text-box"]}>
          <h1>Maecenas mattis egestas</h1>
          <p>Erdum et malesuada fames ac ante ipsum primis in foucibus uspendisse porta</p>
        </div>
        <ul className={styles["p-login-form__slide-list"]}>
          <li>
            <button
              type="button"
              title="button"
              className={styles["active"]}
            ></button>
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
      <div className={styles["p-login-form__form"]}>
        <div style={{ display: "none" }}>
          <h1>EASYMEALS</h1>
          <p>Welcome to EASYMEALS</p>
          <form>
            <div>
              <label htmlFor="userName">Users name or Email</label>
              <input type="text" id="userName" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className={styles["p-login-form__submit"]}>
              <a href="#">Sign In</a>
            </div>
            <p>
              New EASYMEALS? <a href="#">Create Account</a>
            </p>
          </form>
        </div>
        <div>
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
              <label htmlFor="passwordAgain">Confirm Password</label>
              <input type="password" id="passwordAgain" />
            </div>
            <div className={styles["p-login-form__submit"]}>
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
