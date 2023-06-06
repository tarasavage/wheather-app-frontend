export const base_url = `https://weather-app-backend-81ud.onrender.com`;
import { useEffect, useState } from "react";
import axios from "axios";

export const useWeatherFetch = () => {
  const [currentForecast, setCurrentForecast] = useState();

  const [dailyForecast, setDailyForecast] = useState();

  const [hourlyForecast, setHourlyForecast] = useState();

  const getCurrentForecast = async () => {
    try {
      const response = await axios(base_url + "/api/forecast/current/");
      setCurrentForecast(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("final");
    }
  };

  const getDailyForecast = async () => {
    try {
      const response = await axios(base_url + "/api/forecast/daily/");
      setDailyForecast(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("final");
    }
  };

  const setSelectedCity = async () => {
    try {
      const response = await axios.post(base_url + "/api/forecast/daily/");
      setDailyForecast(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("final");
    }
  };

  const getHourlyForecast = async () => {
    try {
      const response = await axios(base_url + "/api/forecast/hourly/");
      setHourlyForecast(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("final");
    }
  };

  useEffect(() => {
    getCurrentForecast();
    getDailyForecast();
    getHourlyForecast();
  }, []);

  return { currentForecast, dailyForecast, hourlyForecast };
};
