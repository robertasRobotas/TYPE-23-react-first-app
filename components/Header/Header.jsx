import { useState } from "react";
import styles from "./styles.module.css";

const Header = () => {
  const [links, setLinks] = useState([
    { url: "about", title: "About" },
    { url: "main", title: "Main" },
    { url: "contacts", title: "Contacts" },
  ]);

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
