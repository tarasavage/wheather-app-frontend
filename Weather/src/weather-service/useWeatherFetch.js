const base_url = `https://weather-app-backend-tahn.onrender.com`;

import { useEffect, useState } from "react";
import axios from "axios";

export const useWeatherFetch = () => {
  const [currentForecast, setCurrentForecast] = useState();

  const fetchCurrentForecast = async () => {
    try {
      const response = await axios(base_url + "/api/forecast/current/");
      setCurrentForecast(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("final");
    }
  };

  useEffect(() => {
    fetchCurrentForecast();
  }, []);

  return { currentForecast };
};
