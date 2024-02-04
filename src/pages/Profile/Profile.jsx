import React, { useContext } from 'react'
import UploadFiles from '../../components/Profile/UploadFiles'
import UploadImg from '../../components/Profile/UploadImg'
import './Profile.css'
import { userContext } from '../../context/Global'

export default function Profile() {
  const { userData, username } = useContext(userContext)
console.log(userData.profileImg);
  // Access the ProfileImg from userData
  const profileImg = userData ? userData.ProfileImg : '';
  const profilePdf = userData ? userData.PDF : '';

  return (
    <div>
      <div className="user-card">
        <img src={profileImg} alt="User's Profile" className="user-photo" />
        <h2 className="user-name">{username}</h2>
        <p className="user-about">about</p>
        <div className="uploads">
        {profileImg? null:<UploadImg />}

          {profilePdf?
          <>
          <h1>Your Resume</h1>
          <img src={profilePdf} alt="" />
          
           </>
          : <UploadFiles />}
          
          
        </div>
      </div>
    </div>
  )
}
