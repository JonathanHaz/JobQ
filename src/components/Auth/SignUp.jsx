import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { userContext } from '../../context/Global'

export default function SignUp() {
    const { handleEmailChange, handlePasswordChange, handleSignUp } = useContext(userContext);
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
    <form onSubmit={PasswordCheck}>
        <input type="text" placeholder='Email' name='Email'  onChange={handleEmailChange}/>
        <input type="password" name="password" onInput={handlePasswordTwoCheck} onChange={handlePasswordChange} />
        <input type="password" name="password1" onInput={handlePasswordCheck} />
        <button>Sign-Up</button>
    </form>
  )
}
