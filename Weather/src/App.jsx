import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './Components/Authorisation/LogIn/LogIn';
import SignUp from './Components/Authorisation/SignUp/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
