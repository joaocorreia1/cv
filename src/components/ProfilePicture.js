import React from 'react'

function ProfilePicture(props) {
  return (
    <img
        {...props}
        id="profile-picture"
        src="https://avatars.githubusercontent.com/u/66282957?v=4"
        alt="profile"
      />
  )
}

export default ProfilePicture