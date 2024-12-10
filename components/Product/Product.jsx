import styles from "./styles.module.css";

const Product = ({ title, description, imgUrl }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <img className={styles.prductImg} src={imgUrl} alt="product" />
      </div>
    </div>
  );
};

export default Product;
