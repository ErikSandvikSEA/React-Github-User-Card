import React from 'react'


class Follower extends React.Component {
     // constructor() {
     //      super()
     // }
     render() {
          return (
               <div>
                    <h2>User Data for follower: {this.props.followerInfo.login}</h2>
                    <div>
                         <img src={this.props.followerInfo.avatar_url} alt='Follower Avatar' />
                         <div>Avatar Image</div>
                         <p>
                              Username: {this.props.followerInfo.login}
                         </p>
                      
                         <p>
                              Profile Link: <a href={this.props.followerInfo.html_url}>{this.props.followerInfo.html_url}</a>
                         </p>
                    </div>
               </div>
          )
     }
}


export default Follower