import styles from "./styles.module.css";

const Header = ({ links }) => {
  return (
    <header className={styles.main}>
      <div className={styles.logo}>Some company</div>
      <nav>
        <ul>
          {links.map((l) => {
            return (
              <li key={l.url}>
                <a href={l.url}>{l.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
