import React, { useState } from 'react';
import '../Authorisation.css';

function SignUp() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for errors
    const newErrors = {};
    const regex = /^(\+\d{1,3}\s?)?\d{8,14}$|^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    if (!regex.test(emailOrPhone)) {
      newErrors.emailOrPhone = 'Invalid email or phone number';
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
      console.log('Form submitted');
    } else {
      setErrors(newErrors);
    }
  };

  const divStyle = {
    backgroundImage: 'url(/AuthorisationBg.png)',
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    position: 'fixed',
  };

  return (
    <div style={divStyle}>
      <div className='logo'>ЛОГО</div>
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
