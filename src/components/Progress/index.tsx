import React from "react";
import styles from "./index.module.scss";

const Progress = () => {
  const [percent, setPercent] = React.useState(10);

  React.useEffect(() => {
    let winHeight: number,
      docHeight: number,
      trackLength: number = 0;

    function getDocHeight() {
      var D = document;
      return Math.max(
        D.body.scrollHeight,
        D.documentElement.scrollHeight,
        D.body.offsetHeight,
        D.documentElement.offsetHeight,
        D.body.clientHeight,
        D.documentElement.clientHeight
      );
    }
    function getMeasurements() {
      winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight;
      docHeight = getDocHeight();
      trackLength = docHeight - winHeight;
    }

    function amountScrolled() {
      var scrollTop =
        window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
      var pctScrolled = Math.floor((scrollTop / trackLength) * 100);
      setPercent(pctScrolled);
    }

    getMeasurements();

    window.addEventListener(
      "resize",
      function () {
        getMeasurements();
      },
      false
    );

    window.addEventListener("scroll", amountScrolled, false);
  }, []);

  return (
    <div className={styles["progress-scroll"]}>
      <div className={styles["progress-scroll__bar"]} style={{ width: `${percent}%` }}></div>
    </div>
  );
};

export default Progress;
