import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles["l-nav-footer"]}>
          <div className={styles["l-nav-footer__inner"]}>
            <nav>
              <a href="#" title="easymeals">
                easymeals
              </a>
              <a href="#" title="home">
                home
              </a>
              <a href="#" title="categories">
                categories
              </a>
              <a href="#" title="recipes">
                recipes
              </a>
              
              <a href="#" title="recipes">
                recipes
              </a>
              <a href="#" title="contact">
                contact
              </a>
              <a href="#" title="about">
                about
              </a>
            </nav>
    
            <address>
              &copy;2023 Easymeals, Co
            </address>
          </div>
        </footer>
      );
}

export default Footer