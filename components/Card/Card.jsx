import { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Card = ({ id, title, imgUrl }) => {
  const [isTitleVisible, setTitleVivible] = useState(false);

  const imageFallback = "https://www.webiconio.com/_upload/255/image_255.svg";

  return (
    <Link href={`product/${id}`}>
      <div
        // onClick={() => {
        //   onResultDelete(id);
        // }}
        className={styles.main}
      >
        <img
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
    </Link>
  );
};

export default Card;
