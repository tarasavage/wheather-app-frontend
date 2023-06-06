import { useState } from 'react';
import '../Authorisation.css';
import { Link } from 'react-router-dom';
const base_url = `https://weather-app-backend-81ud.onrender.com`;
import axios from 'axios';

function LogIn() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!password) {
      newErrors.password = 'Password is required';
    }
    const regex = /^(\+\d{1,3}\s?)?\d{8,14}$|^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    if (!regex.test(emailOrPhone)) {
      newErrors.emailOrPhone = 'Invalid email or phone number';
    }

    if (Object.keys(newErrors).length === 0) {
      console.log('Data are correct');
    } else {
      setErrors(newErrors);
    }
    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const register = {
      email: emailOrPhone,
      password,
    };
    // Check for errors
    if (validateForm()) {
      try {
        const response = await axios.post(
          base_url + '/api/user/token/',
          register,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('success', response);
        sessionStorage.setItem('token', response.data.access);
        if (response.status == '200') {
          window.location.href = `http://127.0.0.1:5173/weather/Lviv`;
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const divStyle = {
    backgroundImage: 'url(/AuthorisationBg.png)',
    width: '100vw',
    height: '100vw',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
  };

  return (
    <div style={divStyle}>
      <form onSubmit={handleSubmit} className='SignUpForm'>
        <div className='SignUpTitle'>Увійти</div>

        <div>
          {errors.emailOrPhone && (
            <div style={{ marginTop: '-18px' }}>{errors.emailOrPhone}</div>
          )}
        </div>
        <div>
          <input
            className='full-field'
            type='email'
            value={emailOrPhone}
            placeholder='Email'
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
        </div>
        <div>
          {errors.password && (
            <div style={{ marginTop: '-18px' }}>{errors.password}</div>
          )}
          {errors.confirmPassword && (
            <div style={{ marginTop: '-18px' }}>{errors.confirmPassword}</div>
          )}
        </div>
        <div>
          <input
            style={{ marginRight: '29px' }}
            className='full-field'
            placeholder='Пароль'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div
          style={{
            marginLeft: '340px',
          }}
        >
          <button type='submit' className='submit-btn'>
            <Link to='/'>Увійти</Link>
          </button>
        </div>
        <p className='register-label'>
          <Link to='/registration'>
            Досі не маєте аккаунту? Хутчіш реєструйтеся!
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LogIn;
