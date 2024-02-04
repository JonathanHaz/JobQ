import React, { useContext } from 'react'
import Login from '../../components/Auth/Login'
import SignUp from '../../components/Auth/SignUp'
import { userContext } from '../../context/Global'

export default function Auth() {
  const {handleSignOut} = useContext(userContext)
  return (
    <div>
      <Login/>
      <SignUp/>
      <div>
        <button onClick={handleSignOut} className='Sign-button'>SignOut</button>
     </div>
    </div>
  )
}
