import { NavLink } from "react-router-dom";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles["l-nav-footer"]}>
      <div className={styles["l-nav-footer__inner"]}>
        <nav>
          <NavLink to="/" title="easymeals">
            easymeals
          </NavLink>
          <NavLink to="/" title="home">
            home
          </NavLink>
          <NavLink to="/contact" title="contact">
            contact
          </NavLink>
          <NavLink to="/about" title="about">
            about
          </NavLink>
        </nav>

        <address>&copy;2023 Easymeals, Co</address>
      </div>
    </footer>
  );
};

export default Footer;
