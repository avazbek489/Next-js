import styles from './LeftCard.module.css'

function LeftCard({ image, logo, title, description }) {
  return (
    <div className={styles.card}>
      <img src={image} alt="" className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.logo}>
          <span className={styles.spanLogo}>──── </span> {logo}
        </h3>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <h1 className={styles.read}>
          read more
          <img src="/images/right-arwow.svg" alt="" />
        </h1>
      </div>
    </div>
  );
}

export default LeftCard;
