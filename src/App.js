import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase/app';

class App extends Component {
  state = {
    speed: 10
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }

  writeSpeedToFb = (input) => {
    firebase.database().ref('react').set({
      speed: input.target.value
    })
  }

  usernameChangedHandler = (input) => {
    this.setState({speed: input.target.value})
    this.writeSpeedToFb(input);

  }

  render() {
    return (
      <div className='App'>
        <h1>{this.state.speed}</h1>
        <input type="text" value={this.state.speed} onChange={this.usernameChangedHandler}/>
      </div>
    );
  }
}

export default App;
