import styles from './navbar.module.scss';

const Navbar = () => {
    return (
        <header className={styles["l-nav-header"]}>
          <div className={styles["l-nav-header__inner"]}>
            <nav>
              <a href="#" title="easymeals">
                easymeals
              </a>
              <a href="#" title="home" className={styles['link--active']}>
                home
              </a>
              <a href="#" title="contact">
                contact
              </a>
              <a href="#" title="about">
                about
              </a>
            </nav>
    
            <nav>
              <a href="#" title="instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" title="twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" title="facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" title="pinterest">
                <i className="fa-brands fa-pinterest"></i>
              </a>
              <a href="#" title="user">
                <i className="fa-regular fa-user"></i>login
              </a>
            </nav>
          </div>
        </header>
      );
}

export default Navbar