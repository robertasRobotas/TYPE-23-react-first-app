import { useState } from "react";
import Card from "../Card/Card";
import styles from "./styles.module.css";

const Main = () => {
  const [destinations, setDestinations] = useState([
    {
      id: "aaa1",
      title: "Visit Crete",
      imgUrl:
        "https://tristanbalme.com/wp-content/uploads/2023/04/Tristan-Balme-the-best-beaches-in-crete-for-you-to-visit.jpg",
    },
    {
      id: "aaa2",
      title: "Tenerife",
      imgUrl:
        "https://content.r9cdn.net/rimg/dimg/67/34/b7e3a5a4-city-80676-166ea9244ff.jpg?crop=true&width=1366&height=768&xhint=3868&yhint=3457",
    },
    {
      id: "aaa3",
      title: "Egypt",
      imgUrl:
        "https://i.natgeofe.com/k/109a4e08-5ebc-48a5-99ab-3fbfc1bbd611/Giza_Egypt_KIDS_0123_16x9.jpg",
    },
    {
      id: "aaa4",
      title: "Turkiye",
      imgUrl:
        "https://www.oliverstravels.com/blog/wp-content/uploads/2024/02/Oludeniz-1.jpg",
    },
  ]);

  return (
    <div className={styles.main}>
      {destinations.map((d) => {
        return <Card key={d.id} title={d.title} imgUrl={d.imgUrl} />;
      })}
    </div>
  );
};

export default Main;
