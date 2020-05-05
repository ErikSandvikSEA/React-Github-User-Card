import React from 'react';
import './App.css';
import axios from 'axios'
import UserData from './components/UserData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: 'eriksandvikSEA',
      followers: [],
      formText: '',
    }
  }

  componentDidMount() {
    // console.log('cDM')
    axios
      .get(`https://api.github.com/users/eriksandviksea`)
      .then(response => {
        // console.log(response)
        this.setState({ user: response.data })
      })
      .catch(err => {
        console.log(err)
      })

    axios
      .get(`https://api.github.com/users/eriksandviksea/followers`)
      .then(response => {
        // console.log(response)
        this.setState({ followers: response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }



  fetchFollowers = (e) => {
    e.preventDefault()
    axios
      .get(`https://api.github.com/users/${this.state.formText}`)
      .then(response => {
        // console.log(response)
        this.setState({ user: response.data })
      })
      .catch(err => {
        console.log(err)
        alert('Invalid Username')
      })

    axios
      .get(`https://api.github.com/users/${this.state.formText}/followers`)
      .then(response => {
        // console.log(response)
        this.setState({ followers: response.data })
      })
      .catch(err => {
        console.log(err)
      })
  }



  handleChange = (e) => {
    this.setState({

      formText: e.target.value
    })
  }




  render() {
    // console.log('rendering from App')
    return (
      <div className="App">
        <header>
          <h1>Github Users App</h1>
        </header>
        <form>
          <input
            type='text'
            value={this.state.formText}
            placeholder='Search Users'
            onChange={this.handleChange}
          />
          <button
            onClick={this.fetchFollowers}
          >
            Submit Search
        </button>
        </form>
        <UserData
          userInfo={this.state.user}
        />
        <h2>{this.state.user.name}'s Followers</h2>
        <div>
          {
            this.state.followers.map(follower => (
                <div key={follower.login}>
                  <h2>User Data for follower: {follower.login}</h2>
                  <div>
                    <img src={follower.avatar_url} alt='Follower Avatar' />
                    <p>
                      Username: {follower.login}
                    </p>
                    <p>
                      Profile Link: <a href={follower.html_url}>{follower.html_url}</a>
                    </p>
                  </div>
                </div>
              )
            
            )
          }
        </div>
      </div>
    );
  }
}

export default App;


