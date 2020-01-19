import React from 'react';
import './App.css';
import fire from './config/Fire';
import User from './User';
import {Login} from './components/Login.js';


class App extends React.Component {

  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if(user) {
        this.setState({ user });
        //localStorage.setItem('user', user.uid);
      } 
      else {
        this.setState({ user: null });
        //localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
      <div>
        {this.state.user ? (<User/>) : <Login/>}
      </div>
    );
  }
}

export default App;
