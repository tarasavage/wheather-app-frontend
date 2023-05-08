import { useState } from "react";
import styles from "./styles.module.scss";

const Header = () => {
  const [location, setLocation] = useState("");

  const onLocationInput = ({ target: { value } }) => {
    setLocation(value);
    
  };

  let date = new Date();


  return (
    <div className={styles.header}>
      <input
        className={styles.location}
        placeholder="Назва населеного пункту або міста:"
        value={location}
        onChange={onLocationInput}
      />

      <button className={styles.cardsButton}>Карти</button>
      
      <button className={styles.vocabularyButton}>Метеословник</button>

    <div className={styles.flexContainer}>
      <button className={styles.langButton}>UA/ENG</button>
      <div className={styles.date}>{date.toLocaleString()}</div>
    </div>

      <button className={styles.profileButton}>Профіль</button>
    </div>
  );
};

export { Header };
