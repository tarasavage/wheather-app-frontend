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

      <button className={styles.cards_button}>Карти</button>
      
      <button className={styles.vocabulary_button}>Метеословник</button>

    <div className={styles.flex_container}>
      <button className={styles.lang_button}>UA/ENG</button>
      <div className={styles.date}>{date.toLocaleString()}</div>
    </div>

      <button className={styles.profile_button}>Профіль</button>
    </div>
  );
};

export { Header };
