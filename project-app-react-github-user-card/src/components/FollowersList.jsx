import React from 'react'
import Follower from './Follower'
import axios from 'axios'


class FollowersList extends React.Component {
     constructor() {
          super()
          this.state = {
               userFollowers: [],
             }
     }

     componentDidMount() {
          console.log('cDM')
          axios
          .get(`https://api.github.com/users/eriksandviksea/followers`)
          .then(response => {
               console.log(this.props.userInfo.login)
               console.log(response.data)
            this.setState({userFollowers: response.data})
          })
          .catch(err => {
            console.log(err)
          })
        }


     render() {
          return (
               <div>
                    <h2>{this.props.userInfo.name}'s Followers</h2>
                    <div>
                         {
                         
                         this.state.userFollowers.map(follower => {
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