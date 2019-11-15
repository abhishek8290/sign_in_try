import React, { Component } from 'react';
import Header from './components/header';

class App extends Component {
<<<<<<< HEAD
   render() { 
    return (  
      <Header/>
=======
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
>>>>>>> 6d4905474abd087f1d9f96ce3937e136e7f92eb4
    );
  
  }
}
 
export default App;