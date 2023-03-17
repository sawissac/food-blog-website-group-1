import React from 'react'
import styles from "./login.module.scss";
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <div className={styles["p-login-form__form"]}>
      <div>
        <h1>EASYMEALS</h1>
        <p>Welcome to EASYMEALS</p>
        <div>
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
            <button  type="button">Sign Up</button>
          </div>
          <p>
            Already have an account?  <Link to="/user/sign-in">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm