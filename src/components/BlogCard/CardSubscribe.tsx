import React from "react";
import styles from "./main.module.scss";

const CardSubscribe = () => {
  const [input, setInput] = React.useState({
    email: "",
    name: "",
  });
  return (
    <div className={styles["p-blog__subscribe"]}>
      <p>
        Get My CookBook <u>Free</u> Today!
      </p>
      <div>
        <input
          type="text"
          placeholder="Your Name*"
          value={input.name}
          onChange={(ev) => {
            setInput((data) => ({ ...data, name: ev.target.value }));
          }}
        />
        <input
          type="text"
          placeholder="Your Email*"
          value={input.email}
          onChange={(ev) => {
            setInput((data) => ({ ...data, email: ev.target.value }));
          }}
        />
        <button
          onClick={() => {
            if (input.name.length === 0) {
              alert("User Name can't be empty!");
            } else if (input.email.length === 0) {
              alert("Email can't be empty!");
            } else {
              alert("Subscribed!");
            }
          }}
        >
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default CardSubscribe;
