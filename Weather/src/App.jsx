import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './Pages/Authorisation/LogIn/LogIn';
import SignUp from './Pages/Authorisation/SignUp/SignUp';
import { MainWindow } from './Pages/Main-Window';

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
