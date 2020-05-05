import React from 'react'

class UserData extends React.Component {
     // constructor() {
     //      super()
     // }
     render() {
          return (
               <div>
                    <h2>User Data for user: {this.props.userInfo.name}</h2>
                    <div>
                         <img src={this.props.userInfo.avatar_url} alt='User Avatar' />
                         <p>
                              Username: {this.props.userInfo.login}
                         </p>
                         <p>
                              Followers: {this.props.userInfo.followers}
                         </p>
                         <p>
                              Following: {this.props.userInfo.following}
                         </p>
                         <p>
                              Profile Link: <a href={this.props.userInfo.html_url}>{this.props.userInfo.html_url}</a>
                         </p>
                    </div>
               </div>
          )
     }
}


export default UserData