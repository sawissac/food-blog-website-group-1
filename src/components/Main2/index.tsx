import React from 'react'
import styles from './main.module.scss';
const Main2 = () => {
  return (
    <div className={styles['l-wrapper']}>
      <div className={styles['subscribe']}>
        
        <p>Get My CookBook Free Today!</p>
        <form>
        <input type="text" placeholder="Your Name*" className={styles['subscribe__input']}></input>
        <input type="text" placeholder="Your Email*" className={styles['subscribe__input']}></input>
        <button className={styles['subscribe__button']}>SUBSCRIBE</button>
        </form>
        
        
      </div>
      <div className={styles['card']}>
        <div className={styles['card__inner']}>
          <div className={styles['card__img']}>
            <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/01/food-photography-blogs-dark.jpg" alt="Food Photo"></img>
          </div>
          <div className={styles['card__icon']}>
            <i className="fa-regular fa-clock"></i>
            <span>30Minutes</span>
            <i className="fa-regular fa-thumbs-up"></i>
          </div>
          <div className={styles['card__text']}>
            <a>Baked sweet potatoes with creamy avocado&pumpkin</a>
          </div>
        </div>
        <div className={`${styles['card__inner']} ${styles['card__inner--popular']}`}>
          <div className={styles['card__img']}>
            <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/01/food-photography-blogs-dark.jpg" alt="Food Photo"></img>
          </div>
          <div className={styles['card__icon']}>
            <i className="fa-regular fa-clock"></i>
            <span>30Minutes</span>
            <i className="fa-regular fa-thumbs-up"></i>
          </div>
          <div className={styles['card__text']}>
            <a>Baked sweet potatoes with creamy avocado&pumpkin</a>
          </div>
        </div>
        <div className={styles['card__inner']}>
          <div className={styles['card__img']}>
            <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/01/food-photography-blogs-dark.jpg" alt="Food Photo"></img>
          </div>
          <div className={styles['card__icon']}>
            <i className="fa-regular fa-clock"></i>
            <span>30Minutes</span>
            <i className="fa-regular fa-thumbs-up"></i>
          </div>
          <div className={styles['card__text']}>
            <a>Baked sweet potatoes with creamy avocado&pumpkin</a>
          </div>
        </div>
        <div className={styles['card__inner']}>
          <div className={styles['card__img']}>
            <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2019/01/food-photography-blogs-dark.jpg" alt="Food Photo"></img>
          </div>
          <div className={styles['card__icon']}>
            <i className="fa-regular fa-clock"></i>
            <span>30Minutes</span>
            <i className="fa-regular fa-thumbs-up"></i>
          </div>
          <div className={styles['card__text']}>
            <a>Baked sweet potatoes with creamy avocado&pumpkin</a>
          </div>
        </div>
        
      </div>
    </div>

    // <div className={styles['circle-container']}>
    //     <div className={styles['circle-container__inner-circle']}>

    //     </div>
    // </div>
  )
}

export default Main2