import React, { useContext, useState } from 'react'
import Login from '../../components/Auth/Login'
import SignUp from '../../components/Auth/SignUp'
import { userContext } from '../../context/Global'

export default function Auth() {
  const { handleSignOut } = useContext(userContext)
  const [signButton, setSignButton] = useState(false);
  const toggleForm = () => {
    setSignButton(!signButton)
  }

  return (
    <div>
      {signButton ?
        <Login toggleForm={toggleForm} />
        :
        <SignUp toggleForm={toggleForm} />
      }

     
    </div>
  )
}
