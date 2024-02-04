import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { userContext } from '../../context/Global'
import { Link } from 'react-router-dom';
import "./Auth.css"
export default function SignUp(props) {
    const { handleEmailChange, handlePasswordChange, handleSignUp , handleUserStatusChange} = useContext(userContext);
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');
  
    const handlePasswordCheck = (e) => {
      setPasswordOne(e.target.value);
    };
  
    const handlePasswordTwoCheck = (e) => {
      setPasswordTwo(e.target.value);
    };
  
    const PasswordCheck = (e) => {
      e.preventDefault();
      if (passwordOne === passwordTwo) {
        handleSignUp();
      } else {
        alert("Passwords do not match");
      }
    };
  
  return (
    <div className='signForm'>
    <form onSubmit={PasswordCheck}>
        <input type="text" placeholder='Email' name='Email'  onChange={handleEmailChange}/>
        <input type="password" placeholder='Password' name="password" onInput={handlePasswordTwoCheck} onChange={handlePasswordChange} />
        <input type="password" placeholder='Confirm Password' name="password1" onInput={handlePasswordCheck} />
        <div class="radio-container">
    <input type="radio" id="jobSeeker" name="userType" value="jobSeeker" onChange={handleUserStatusChange} />
    <label class="radio-label" htmlFor="jobSeeker"><div class="radio-btn"></div>Job Seeker</label>
    </div>
    <div class="radio-container">
    <input type="radio" id="HR" name="userType" value="HR" onChange={handleUserStatusChange} />
    <label class="radio-label" htmlFor="HR"><div class="radio-btn"></div>Recruiter</label>
    </div>
        <button>Sign Up</button>
    </form>
    <p>Already have an account? <Link to="/auth" onClick={props.toggleForm}>Login</Link></p>
    </div>
  )
}
