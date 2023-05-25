import { useParams } from "react-router-dom";
import { Header } from "./Components/Header";
import { LeftMenu } from "./Components/Left-Menu";
import Main from "./Components/Main/Main";
import { RightMenu } from "./Components/Right-Menu";

import styles from "./styles.module.scss";

const MainWindow = () => {

  return (
    <>
      <Header />
      <div className={styles.flex_container}>
        <LeftMenu />
        <Main />
        <RightMenu />
      </div>
    </>
  );
};

export { MainWindow };
