import styles from "./mainvirtual.module.scss";

const Main = () => {
  return (
    <section className={styles["p-main-virtual"]}>
      <div className={styles["p-main-virtual__inner"]}>
        <div className={styles["p-main-virtual__content"]}>
          <div className={styles["p-main-virtual__info"]}>
            <span>
              <i className="fa-brands fa-readme"></i>
              2:30mins
            </span>
            <span>
            <i className="fa-solid fa-tag"></i>
              Tips & Tricks
            </span>
          </div>
          <h1>green veggies with flavoured butter</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maiores neque illum rem, quibusdam maxime
            hic. Praesentium cum, modi officiis ut, obcaecati deleniti quae amet velit ea adipisci ducimus! Atque.
          </p>
          <div className={styles["p-main-virtual__user-chip"]}>
            <img
              width="50px"
              height="50px"
              src="https://sp-images.summitpost.org/947006.jpg?auto=format&fit=max&h=800&ixlib=php-2.1.1&q=35&s=876696700800816d01e0d1eb31ce7ab0"
              alt=""
            />
            <div>
              <h4>Marry Brown</h4>
              <p>May 19, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
