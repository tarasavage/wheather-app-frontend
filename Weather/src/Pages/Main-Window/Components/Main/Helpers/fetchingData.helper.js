// interval: (daily | hourly | current)
import axios from "axios";
import { base_url } from "../../../../../weather-service/useWeatherFetch";

export const fetchData = async (interval, city) => {
  try {
    const response = await axios.get(
      `${base_url}/api/forecast/${interval}/${city}/`
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
