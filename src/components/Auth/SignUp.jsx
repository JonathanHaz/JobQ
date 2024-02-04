// SignUp.js
import React, { useState, useContext } from 'react';
import { userContext } from '../../context/Global';
import { Link } from 'react-router-dom';
import './Auth.css';

export default function SignUp(props) {
  const { handleEmailChange, handlePasswordChange, handleSignUp, handleUserStatusChange } = useContext(userContext);
  const [passwordOne, setPasswordOne] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');
  const [username, setUsername] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordCheck = (e) => {
    setPasswordOne(e.target.value);
  };

  const handlePasswordTwoCheck = (e) => {
    setPasswordTwo(e.target.value);
  };

  const PasswordCheck = (e) => {
    e.preventDefault();
    if (passwordOne === passwordTwo) {
      handleSignUp(username); // Pass username here
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className='signUp-container'>
    <div className='signForm'>
      <h1>Sign Up</h1>
      <form className='radio-form' onSubmit={PasswordCheck}>
        <input type='text' placeholder='Username' name='username' className='form-input' onChange={handleUsernameChange} />
        <input type='text' placeholder='Email' name='Email' className='form-input' onChange={handleEmailChange} />
        <input type='password' placeholder='Password' name='password' className='form-input' onInput={handlePasswordTwoCheck} onChange={handlePasswordChange} />
        <input type='password' placeholder='Confirm Password' name='password1' className='form-input' onInput={handlePasswordCheck} />
        <div className='radio-container'>
          <input type='radio' id='jobSeeker' name='userType' value='jobSeeker' onChange={handleUserStatusChange} />
          <label className='radio-label' htmlFor='jobSeeker'>
            Job Seeker
          </label>
        </div>
        <div className='radio-container'>
          <input type='radio' id='HR' name='userType' value='HR' onChange={handleUserStatusChange} />
          <label className='radio-label' htmlFor='HR'>
            
            Recruiter
          </label>
        </div>
        <button className='signUp-button'>Sign Up</button>
      </form>
      <p className='login-text'>
        Already have an account? <Link to='/' onClick={props.toggleForm}>Login</Link>
      </p>
    </div>
    </div>
  );
}
