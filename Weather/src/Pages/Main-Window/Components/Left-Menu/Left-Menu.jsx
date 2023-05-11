import { LocationWidgetComponent } from "../../../../Components/Location-Widget";
import styles from "./styles.module.scss";

import RainSVG from "/public/svg/rain.svg";

const LeftMenu = () => {
  const data = [
    {
      temperature: "19^C",
      feltTemperature: "20^C",
      location: "Польща",
      precipitation: "Без опадів",
      icon: RainSVG,
      weatherText:
        "Увесь день у Львові спостерігалося ясне небо, й хмари не засмутили його своєю присутністю до самого вечора. Без опадів",
    },
    {
        temperature: "19^C",
        feltTemperature: "20^C",
        location: "Сербія",
        precipitation: "Без опадів",
        icon: RainSVG,
        weatherText:
          "Увесь день у Львові спостерігалося ясне небо, й хмари не засмутили його своєю присутністю до самого вечора. Без опадів",
      }
  ];
  
  return (
    <div className={styles.left_menu}>
      <button className={styles.countries_button}>Вибрані країни</button>

     {data?.map((info)=>
     (  <LocationWidgetComponent data={info} />)
     )}
      
      
    </div>
  );
};

export { LeftMenu };
