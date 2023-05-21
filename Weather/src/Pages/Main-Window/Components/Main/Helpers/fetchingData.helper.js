export const fetchDailyData = async (city) => {
     try{
          const response = await axios.get(`http://127.0.0.1:8000/api/forecast/daily/${city}/`);
          return response;
     } catch(e){
          console.error(e)
     }
}

export const fetchHourlyData = async (city) => {
     try{
          const response = await axios.get(`http://127.0.0.1:8000/api/forecast/hourly/${city}/`);
          return response;
     } catch(e){
          console.error(e)
     }
}

export const fetchCurrentData = async (city) => {
     try{
          const response = await axios.get(`http://127.0.0.1:8000/api/forecast/current/${city}/`);
          return response;
     } catch(e){
          console.error(e)
     }
}