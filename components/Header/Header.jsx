import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.main}>
      <div className={styles.logo}>Some company</div>
      <nav>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
