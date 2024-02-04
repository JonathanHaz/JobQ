import React, { useContext } from 'react'
import Global, { userContext } from '../../context/Global'

export default function Login() {
    const {handleEmailChange ,handlePasswordChange , handleLogin , user} = useContext(userContext)
    console.log(user);
  return (
    <form action="" onSubmit={handleLogin}>
        <input type="text" name='Email' placeholder='Email' onChange={handleEmailChange} />
        <input type="password" name='password' placeholder='password' onChange={handlePasswordChange}/>
        <button>Login</button>
    </form>
  )
}
