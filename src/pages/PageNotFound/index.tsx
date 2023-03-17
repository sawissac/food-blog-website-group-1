import React from "react";
import styles from "./index.module.scss";
import Navbar from "../../components/Navbar";
const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <div className={styles["not-found-page"]}>404<br /> Page Not found</div>
    </>
  );
};

export default PageNotFound;
