import React from 'react';
import './App.css';
import axios from 'axios'
import UserData from './components/UserData'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user: {},
      userFollowers: []
    }
  }

  componentDidMount() {
    console.log('cDM')
    axios
    .get(`https://api.github.com/users/eriksandviksea`)
    .then(response => {
      this.setState({user: response.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    // console.log('rendering from App')
    return (
      <div className="App">
        <header>
          <h1>Github Users App</h1>
        </header>
        <UserData 
          userInfo={this.state.user}
        />
      </div>
    );
  }
}

export default App;


