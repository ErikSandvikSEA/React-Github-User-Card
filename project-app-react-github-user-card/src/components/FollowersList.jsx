import React from 'react'
import Follower from './Follower'


class FollowersList extends React.Component {
     constructor() {
          super()
          this.state = {
               userFollowers: [],
             }
     }


     render() {
          return (
               <div>
                    <h2>{this.props.followers.name}'s Followers</h2>
                    <div>
                         {
                         
                         this.props.followers.map(follower => {
                              return(
                              <Follower key={follower.login} followerInfo={follower} />
                              )
                         }     
                         
                         )
                    }
                    </div>
               </div>
          )
     }
}


export default FollowersList