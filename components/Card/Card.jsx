import styles from "./styles.module.css";

const Card = ({ title, imgUrl }) => {
  return (
    <div className={styles.main}>
      <img src={imgUrl} />
      <h4>{title}</h4>
    </div>
  );
};

export default Card;
