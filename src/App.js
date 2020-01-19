import React from 'react';
import './App.css';
import fire from './config/Fire';
import User from './User';

class Home extends React.Component {
  constructor(props) {
      super(props);
      this.logout = this.logout.bind(this);
  }
  logout() {
      fire.auth().signOut();
  }
  render() {
      return (
          <div>
              <h1>Welcome to Home</h1>
              <button onClick={this.logout}>Logout</button>
          </div>
      );

  }

}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    console.log("IT WORKS OMG");
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{ console.log("Successfully Logged In")
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
       <div className="col-md-6">
       <form>
      <div className="form-group">
       <label htmlFor="exampleInputEmail1">Email address</label>
       <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
       <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
       <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
      <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
 </form>
 
 </div>
    );
  }
}

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
