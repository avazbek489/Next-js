import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.logo}>MNTN</h1>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Equipment</li>
          <li className={styles.navItem}>About us</li>
          <li className={styles.navItem}>Blog</li>
        </ul>
        <img src="/images/Account.svg" alt="account icon images" />
      </div>
    </header>
  );
}

export default Header;
