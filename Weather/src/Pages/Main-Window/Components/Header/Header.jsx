import { useState } from "react";
import styles from "./styles.module.scss";
import BasicSelect from "../../../../Components/Select/Select";
import { Link } from "react-router-dom";

const Header = () => {
  const [location, setLocation] = useState("");

  const onLocationInput = ({ target: { value } }) => {
    setLocation(value);
  };

  let date = new Date();

  const token = sessionStorage.getItem("token");

  return (
    <div className={styles.header}>
      <BasicSelect />

      <div className={styles.flex_container}>
        <button className={styles.lang_button}>UA/ENG</button>
        <div className={styles.date}>{date.toLocaleString()}</div>
      </div>
      {token ? (
        <></>
      ) : (
        <button className={styles.profile_button}>
          <Link to="/login">
            <span className={styles.label}>Увійти</span>
          </Link>
          <Link to="/">
            {" "}
            <span className={styles.label}>Зареєструватись</span>
          </Link>
        </button>
      )}
    </div>
  );
};

export { Header };
