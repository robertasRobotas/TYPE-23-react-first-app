import Card from "../Card/Card";
import styles from "./styles.module.css";
import Spinner from "../Spinner/Spinner";
import Button from "../Button/Button";
import { useState } from "react";

const Main = ({ series, setSeries }) => {
  const [isShowProducts, setShowProduct] = useState(false);

  // const removeCard = (id) => {
  //   const filteredCards = series.filter((s) => s.id !== id);
  //   setSeries(filteredCards);
  // };

  return (
    <div className={styles.main}>
      {/* <Button
        title="Add"
        type="SUCCESS"
        onClick={() => {
          setShowProduct(true);
        }}
      />
      <Button
        title="Delete"
        type="DANGER"
        onClick={() => {
          setShowProduct(false);
        }}
      /> */}

      {series ? (
        series.map((d) => {
          return (
            <Card
              id={d.id}
              key={d.id}
              title={d.title.split(" ").slice(0, 3).join(" ")}
              imgUrl={d.image}
              // onResultDelete={removeCard}
            />
          );
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Main;
