import { useState } from "react";
import Card from "../Card/Card";
import styles from "./styles.module.css";

const Main = () => {
  const [destinations, setDestinations] = useState([
    {
      title: "Visit Crete",
      imgUrl:
        "https://tristanbalme.com/wp-content/uploads/2023/04/Tristan-Balme-the-best-beaches-in-crete-for-you-to-visit.jpg",
    },
    {
      title: "Tenerife",
      imgUrl:
        "https://content.r9cdn.net/rimg/dimg/67/34/b7e3a5a4-city-80676-166ea9244ff.jpg?crop=true&width=1366&height=768&xhint=3868&yhint=3457",
    },
    {
      title: "Egypt",
      imgUrl:
        "https://i.natgeofe.com/k/109a4e08-5ebc-48a5-99ab-3fbfc1bbd611/Giza_Egypt_KIDS_0123_16x9.jpg",
    },
  ]);

  const [isAllDestinationsAvailable, setAllDestinationsAvailable] =
    useState(false);

  return (
    <div className={styles.main}>
      <Card title={destinations[0].title} imgUrl={destinations[0].imgUrl} />
      <Card title={destinations[1].title} imgUrl={destinations[1].imgUrl} />
      <Card title={destinations[2].title} imgUrl={destinations[2].imgUrl} />

      {isAllDestinationsAvailable ? (
        <>All destinations availible</>
      ) : (
        <>Not all destinations available</>
      )}
    </div>
  );
};

export default Main;
