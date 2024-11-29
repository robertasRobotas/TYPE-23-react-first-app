import { useState } from "react";
import styles from "./styles.module.css";

const Card = ({ title, imgUrl }) => {
  const [isTitleVisible, setTitleVivible] = useState(false);

  return (
    <div className={styles.main}>
      <img src={imgUrl} />
      <button
        onClick={() => {
          setTitleVivible(!isTitleVisible);
        }}
      >
        {isTitleVisible ? <>Hide</> : <>Show</>}
      </button>
      {isTitleVisible && <h4>{title}</h4>}
    </div>
  );
};

export default Card;
