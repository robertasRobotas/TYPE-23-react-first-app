import Card from "../Card/Card";
import styles from "./styles.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Main;
