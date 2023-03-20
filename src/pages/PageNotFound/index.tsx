import React from "react";
import styles from "./index.module.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const PageNotFound: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className={styles["not-found-page"]}>
        404 <br /> Page Not found
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default PageNotFound;
