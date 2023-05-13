import React, { useState } from 'react';
import '../Authorisation.css';

function LogIn() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for errors
    const newErrors = {};

    if (!password) {
      newErrors.password = 'Password is required';
    }
    const regex = /^(\+\d{1,3}\s?)?\d{8,14}$|^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    if (!regex.test(emailOrPhone)) {
      newErrors.emailOrPhone = 'Invalid email or phone number';
    }

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted');
    } else {
      setErrors(newErrors);
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
      <div></div>
      <div className='logo'>ЛОГО</div>
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
            type='text'
            value={emailOrPhone}
            placeholder='Email або номер телефону'
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
        <p className='register-label'>
          Досі не маєте аккаунту? Хутчіш реєструйтеся!
        </p>
        <div
          style={{
            marginLeft: '340px',
          }}
        >
          <button type='submit' className='submit-btn'>
            Увійти
          </button>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
