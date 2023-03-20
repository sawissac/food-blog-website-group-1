import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { isLogin } = useContext(AuthContext);

  return (
    <header className={styles["l-nav-header"]}>
      <div className={styles["l-nav-header__inner"]}>
        <nav>
          <NavLink to="/" title="easymeals">
            easymeals
          </NavLink>
          <NavLink
            to="/"
            title="home"
            className={({ isActive }) => {
              return isActive ? styles["link--active"] : "";
            }}
          >
            home
          </NavLink>
          <NavLink
            to="/contact"
            title="contact"
            className={({ isActive }) => {
              return isActive ? styles["link--active"] : "";
            }}
          >
            contact
          </NavLink>
          <NavLink
            to="/about"
            title="about"
            className={({ isActive }) => {
              return isActive ? styles["link--active"] : "";
            }}
          >
            about
          </NavLink>
        </nav>

        <nav>
          <a href="https://www.instagram.com/?hl=en" title="instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://twitter.com/" title="twitter">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com/" title="facebook">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.pinterest.com/" title="pinterest">
            <i className="fa-brands fa-pinterest"></i>
          </a>
          { 
             isLogin ? (
            <NavLink to="/profile" title="user">
              <i className="fa-regular fa-user"></i>Profile
            </NavLink>
          ) : (
            <NavLink to="/user/sign-in" title="user">
              <i className="fa-regular fa-user"></i>Sign in
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
