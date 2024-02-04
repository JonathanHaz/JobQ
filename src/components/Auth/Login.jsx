import React, { useContext } from 'react'
import Global, { userContext } from '../../context/Global'
import { Link } from 'react-router-dom';
export default function Login(props) {
    const {handleEmailChange ,handlePasswordChange , handleLogin , user} = useContext(userContext)
    console.log(user);
  return (
    <div className='signForm'> 
      <form action="" onSubmit={handleLogin}>
          <input type="text" name='Email' placeholder='Email' onChange={handleEmailChange} />
          <input type="password" name='password' placeholder='password' onChange={handlePasswordChange}/>
          <button>Login</button>
      </form>
      <p>Dont have an account? <Link to="/" onClick={props.toggleForm}>Sign-Up</Link></p>
    </div>
  )
}
