import React, { Component } from 'react';
import SignIn from "./sign_in";
import SignUp from "./sign_up";


class Header extends Component {
    constructor() {
        super();
        this.state = {
          showsign_in: false,
          showsign_up: false
        };
       
      }
    SignUpState() {
        this.setState({
          showsign_up: !this.state.showsign_up
        });
    }
    SignInState() {
        console.log('yaha aaya ')
        this.setState({
    
          showsign_in: !this.state.showsign_in
        });
    
      }
    render() { 
        return ( 
            <div className="d-flex ">
            <div className="mr-auto">
                 <h1>Hi Shristy. Welcome and comfort yourself here.</h1>
            </div>
            <div className="mt-3">
                <button className="mr-4" onClick={this.SignInState.bind(this)}>SIGN IN</button>
                <button className="mr-4" onClick={this.SignUpState.bind(this)}>SIGN UP</button>
                <p>Random Statement to write </p>
                    {this.state.showsign_in ? <SignIn/> : null}
                    {this.state.showsign_up ? <SignUp/>: null}     
            </div>
            </div>
         );
    }
}
 
export default Header;