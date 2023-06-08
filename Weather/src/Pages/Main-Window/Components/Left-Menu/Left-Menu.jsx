import { LocationWidgetComponent } from "../../../../Components/Location-Widget";
import styles from "./styles.module.scss";

import RainSVG from "/public/svg/rain.svg";

const LeftMenu = () => {
  const data = [
    
  ];
  
  return (
    <div className={styles.left_menu}>
      
     {data?.map((info)=>
     (  <LocationWidgetComponent data={info} />)
     )}
      
      
    </div>
  );
};

export { LeftMenu };
