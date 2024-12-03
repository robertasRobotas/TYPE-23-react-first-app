import Card from "../Card/Card";
import styles from "./styles.module.css";
import Spinner from "../Spinner/Spinner";

const Main = ({ series, setSeries }) => {
  const removeCard = (id) => {
    const filteredCards = series.filter((s) => s.id !== id);
    setSeries(filteredCards);
  };

  return (
    <div className={styles.main}>
      {series ? (
        series.map((d) => {
          return (
            <Card
              id={d.id}
              key={d.id}
              title={d.name}
              imgUrl={d.image}
              onResultDelete={removeCard}
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
