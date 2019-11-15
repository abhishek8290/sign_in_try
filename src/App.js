import React,{Component} from 'react';
import './App.css';
import Register from './Register.js';
import Login from './Login.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      showsignup: false,
      showlogin: false
    };
   
  }
  ShowRegister() {
    this.setState({
      showlogin:false,
      showsignup: !this.state.showsignup

    });
   

  }
  ShowLogin() {
    console.log('yaha aaya ')
    this.setState({
      showsignup:false,
      showlogin: !this.state.showlogin
    });

  }
  render() {
    return (
      <div className='app'>
        <h1>Hello this is a sample signin singup page</h1>
        <button onClick={this.ShowRegister.bind(this)}>SIGN UP</button>
        <button onClick={this.ShowLogin.bind(this)}>SIGN IN</button>
        <p>Random Statement to write </p>

         {this.state.showsignup ? <Register/> : null}
         {this.state.showlogin ? <Login/>: null}
      </div>
    );
  }
};

export default App;