import React, { useContext, useState } from "react";
import styles from "./login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const RegisterForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [reWritePassword, setReWritePassword] = useState("");
  const { createUserData, uniqueId } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleSubmit() {
    if (userName.length === 0) {
      alert("User name can't be empty");
      return;
    }
    if (password.length === 0) {
      alert("Password can't be empty");
      return;
    }
    if (reWritePassword !== password) {
      alert("reWritepassword doesn't match");
      return;
    }
    createUserData({
      userName,
      password,
      id: uniqueId,
      role: "user",
    })
    setUserName("");
    setPassword("");
    setReWritePassword("");
    navigate("/user/sign-in");
  }

  return (
    <div className={styles["p-login-form__form"]}>
      <div>
        <h1>EASYMEALS</h1>
        <p>Welcome to EASYMEALS</p>
        <div>
          <div className={styles["input-control"]}>
            <label htmlFor="userName">Users name or Email</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(ev) => {
                setUserName(ev.target.value);
              }}
            />
          </div>
          <div className={styles["input-control"]}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(ev) => {
                setPassword(ev.target.value);
              }}
            />
          </div>
          <div className={styles["input-control"]}>
            <label htmlFor="passwordAgain">Confirm Password</label>
            <input
              type="password"
              id="passwordAgain"
              value={reWritePassword}
              onChange={(ev) => {
                setReWritePassword(ev.target.value);
              }}
            />
          </div>
          <div className={styles["p-login-form__submit"]}>
            <button type="button" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
          <p>
            Already have an account? <Link to="/user/sign-in">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
