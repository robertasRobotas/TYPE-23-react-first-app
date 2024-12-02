import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import styles from "./styles.module.css";
import Spinner from "../Spinner/Spinner";

const Main = () => {
  const [series, setSeries] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://66ed081d380821644cdb0a60.mockapi.io/Serie"
    );

    console.log("response.data", response.data);

    setSeries(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      {series ? (
        series.map((d) => {
          return <Card key={d.id} title={d.title} imgUrl={d.coverUrl} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Main;
