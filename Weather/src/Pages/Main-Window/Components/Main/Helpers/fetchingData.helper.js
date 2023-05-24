// interval: (daily | hourly | current)
export const fetchData = async (interval, city) => {
     try{
          const response = await axios.get(`http://127.0.0.1:8000/api/forecast/${interval}/${city}/`);
          return response;
     } catch(e){
          console.error(e)
     }
}