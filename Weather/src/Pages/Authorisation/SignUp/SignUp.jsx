import { useState } from 'react';
import '../Authorisation.css';
const base_url = `https://weather-app-backend-81ud.onrender.com`;
import axios from 'axios';

function SignUp() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const validateForm = () => {
    const newErrors = {};
    const regex = /^(\+\d{1,3}\s?)?\d{8,14}$|^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    if (!regex.test(emailOrPhone)) {
      newErrors.emailOrPhone = 'Invalid email';
    }

    if (!name) {
      newErrors.name = 'Name is required';
    }
    if (!surname) {
      newErrors.surname = 'Surname is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length === 0) {
      console.log('data are correct');
    } else {
      setErrors(newErrors);
    }
    return newErrors
  };
  
  const handleSubmit = async (e) => {
    console.log(!validateForm())
    e.preventDefault();
    const register = {
      email: emailOrPhone,
      first_name: name,
      last_name: surname,
      password,
      password2: confirmPassword,
      notification: isChecked,
    };
    // Check for errors
if (validateForm()){
      try {
        const response = await axios.post(
          base_url + '/api/user/register/',
          register,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('success', response.status);
        // localStorage.setItem('responseData', JSON.stringify(response.data.jwt));
      } catch (error) {
        console.log(error);
      } finally{
        window.location.href = 'http://127.0.0.1:5173/login'
      
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
        <div className='SignUpTitle'>Реєстрація</div>
        <div>
          <div style={{ display: 'flex', gap: '375px' }}>
            {errors.surname && (
              <div style={{ marginTop: '-20px' }}>{errors.surname}</div>
            )}
            {errors.name && (
              <div style={{ marginTop: '-20px' }}>{errors.name}</div>
            )}
          </div>
          <input
            className='single-field'
            type='text'
            style={{ marginRight: '29px' }}
            value={name}
            placeholder="Ім'я"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='single-field'
            type='text'
            value={surname}
            placeholder='Прізвище'
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
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
            className='single-field'
            placeholder='Придумайте пароль'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            className='single-field'
            placeholder='Повторіть пароль'
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div
          style={{
            marginLeft: '440px',
            marginTop: '-30px',
            marginBottom: '20px',
            fontSize: '20px',
          }}
        >
          <label>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            Сповіщення
          </label>
        </div>
        <div
          style={{
            marginLeft: '340px',
          }}
        >
          <button type='submit' className='submit-btn'>
            Зареєструватись
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
