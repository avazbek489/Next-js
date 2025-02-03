import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
     <div className={styles.heroContainer}>
     <img width={24} height={173} src="/images/Social.svg" alt="" />
     <article className={styles.article}>
       <h3 className={styles.title}><span className={styles.titleSpan}>───────────</span>   A Hiking guide</h3>
       <h1 className={styles.desc}>Be prepared for the Mountains and beyond!</h1>
       <h4 className={styles.scroll}>scroll down<img src="/images/icon-arrow.svg" alt="" /></h4>
     </article>
     <img className={styles.bar} src="/images/Slider.svg" alt="" />
     </div>
    </section>
  );
}

export default Hero;
