import React from 'react';
import './App.css';
import axios from 'axios'
import UserData from './components/UserData'
import FollowersList from './components/FollowersList'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user: 'eriksandvikSEA',
      followers: [],
      formText: '',
    }
  }

  componentDidMount() {
    console.log('cDM')
    axios
    .get(`https://api.github.com/users/${this.state.user}`)
    .then(response => {
      console.log(response)
      this.setState({user: response.data})
    })
    .catch(err => {
      console.log(err)
    })

    axios
    .get(`https://api.github.com/users/${this.state.user}/followers`)
    .then(response => {
      console.log(response)
      this.setState({followers: response.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  fetchUsers = (e) =>  {
    e.preventDefault()
    axios
      .get(`https://api.github.com/users/${this.state.formText}`)
      .then(response => {
        this.setState({user: response.data})
      })
      .catch(err => console.log(err))
  }

  

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      ...this.state,
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
         onSubmit={this.fetchUsers}
        >
          Submit Search
        </button>
        </form>
        <UserData 
          userInfo={this.state.user}
        />
        <FollowersList 
          followers={this.state.followers}
        />
      </div>
    );
  }
}

export default App;


