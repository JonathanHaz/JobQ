// Login.js
import React, { useContext } from 'react';
import { userContext } from '../../context/Global';
import { Link } from 'react-router-dom';
import './Auth.css'; // Make sure to import the CSS file

export default function Login(props) {
  const { handleEmailChange, handlePasswordChange, handleLogin } = useContext(userContext);

  return (
    <div className='signUp-container'>
    <div className='signForm'>
      <h1>Sign In</h1>
      <form action='' onSubmit={handleLogin}>
        <input type='text' name='Email' placeholder='Email' className='form-input' onChange={handleEmailChange} />
        <input type='password' name='password' placeholder='Password' className='form-input' onChange={handlePasswordChange} />
        <button className='signUp-button'>Login</button>
      </form>
      <p className='login-text'> Don't have an account? <Link to='/' onClick={props.toggleForm}>Sign-Up</Link>
      </p>
    </div>
    </div>
  );
}
