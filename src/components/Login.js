import React from 'react';
import fire from "../config/Fire";

export class Login extends React.Component {
    constructor(props) {
      super(props);
      this.login = this.login.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.signup = this.signup.bind(this);
      this.state = {
        selectBtn: "false",
        loginStatus: "User",
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


    btnSelected = (select) => {
        const selected = {
          border: "1px solid black",
          padding: "1%",
          background: "black",
          color: "white"
        }
        const notSelected = {
          border: "1px solid black",
          padding: "1%",
          background: "white",
          color: "black"
        }
        
      return select ? selected : notSelected;
  
    };
    btnClick = () => 
    {
        this.setState({selectBtn: !this.state.selectBtn})
    }

    render() {
      return (
          <div style = {formStyle}>
        <div style={{ display: "flex" }}>
          <button onClick = {this.btnClick} style={this.btnSelected(this.state.selectBtn)}> User</button>
          <button onClick = {this.btnClick} style={this.btnSelected(!this.state.selectBtn)}>Business</button>
        </div>
         <div className="col-md-6">
             
         <form >
        <div className="form-group">
         <label htmlFor="exampleInputEmail1">Email</label>
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
   </div>
      );
    }
  }

  export default Login;

  const formStyle = {
      width: '80%',
      margin:'auto',
      fontSize:"100%"
  }