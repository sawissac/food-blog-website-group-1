import React from "react";
import styles from "./login.module.scss";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <section className={styles["p-login-form"]}>
      <div className={styles["p-login-form__img"]}>
        <div
          className={styles["p-login-form__img-con"]}
          style={{
            backgroundImage:
              "url('https://th.bing.com/th/id/R.d764953312402d05364fb658b787148f?rik=2Z3PdtXXSrxPkA&pid=ImgRaw&r=0')",
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
      <LoginForm />
    </section>
  );
};

export default Login;
