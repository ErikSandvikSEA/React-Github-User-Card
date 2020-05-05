import React from 'react'

const UserData = (props) => {
     return (
          <div>
              <h2>User Data for user: {props.userInfo.name}</h2>
          </div>
      )
}


export default UserData