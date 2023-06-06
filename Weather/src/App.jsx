import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './Pages/Authorisation/LogIn/LogIn';
import SignUp from './Pages/Authorisation/SignUp/SignUp';
import { MainWindow } from './Pages/Main-Window';
import { WeatherContext } from './context';
import { useState } from 'react';
import { useWeatherFetch } from './weather-service/useWeatherFetch';

function App() {
  const { currentForecast, dailyForecast, hourlyForecast } = useWeatherFetch();

  return (
    <WeatherContext.Provider
      value={{ currentForecast, dailyForecast, hourlyForecast }}
    >
      <BrowserRouter>
        <Routes>
        <Route path='/:city' element={<MainWindow/>} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
    
        </Routes>
      </BrowserRouter>
    </WeatherContext.Provider>
  );
}

export default App;
