import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './Components/Authorisation/LogIn/LogIn';
import SignUp from './Components/Authorisation/SignUp/SignUp';
import { MainWindow } from './Components/Main-Window';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/weather' element={<MainWindow/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
