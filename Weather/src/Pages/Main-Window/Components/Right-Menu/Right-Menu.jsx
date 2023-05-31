import { LocationWidgetComponent } from "../../../../Components/Location-Widget";

import SunSVG from "/public/svg/suncloud.svg";

import styles from "./styles.module.scss";

const RightMenu = () => {
  const data = [
    {
      temperature: "19^C",
      feltTemperature: "20^C",
      location: "Київ",
      precipitation: "Без опадів",
      icon: SunSVG,
      weatherText:
        "Увесь день у Львові спостерігалося ясне небо, й хмари не засмутили його своєю присутністю до самого вечора. Без опадів",
    },
    {
        temperature: "19^C",
        feltTemperature: "20^C",
        location: "Львів",
        precipitation: "Без опадів",
        icon: SunSVG,
        weatherText:
          "Увесь день у Львові спостерігалося ясне небо, й хмари не засмутили його своєю присутністю до самого вечора. Без опадів",
      }
  ];

  const token = sessionStorage.getItem('token');
  
  return (
    <div className={styles.right_menu}>
      <button className={styles.countries_button}>Вибрані міста</button>

     {token?data?.map((info)=>
     (  <LocationWidgetComponent data={info} />)
     ):<>Для додавання вибраних міст авторизуйтесь.</>}
      
      
    </div>
  );
};

export { RightMenu };
