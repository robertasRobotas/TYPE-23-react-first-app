import { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

const Card = ({ id, title, imgUrl, onResultDelete }) => {
  const [isTitleVisible, setTitleVivible] = useState(false);

  const imageFallback = "https://www.webiconio.com/_upload/255/image_255.svg";

  return (
    <div
      onClick={() => {
        onResultDelete(id);
      }}
      className={styles.main}
    >
      <Image
        alt="character"
        width={100}
        height={100}
        src={imgUrl || imageFallback}
      />
      <button
        onClick={(e) => {
          setTitleVivible(!isTitleVisible);
          e.stopPropagation();
        }}
      >
        {isTitleVisible ? <>Hide</> : <>Show</>}
      </button>
      {isTitleVisible && <h4>{title}</h4>}
    </div>
  );
};

export default Card;
