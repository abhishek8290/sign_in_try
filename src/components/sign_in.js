import React, { Component } from 'react';
import { Button, Input, Checkbox } from 'antd';

class SignIn extends Component {
  state = {
    username: '',
    password: '',
  }
  onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
}
    render() { 
        return ( 
            <div>
            <div> username </div>
          <Input
            name='username'
            placeholder='Username'
            onChange={e => this.onChange(e)}
            value={this.state.username} />
            
           
            <div> Password </div>
          <Input
            name='password'
            placeholder='Password'
            type='password'
            onChange={e => this.onChange(e)}
            value={this.state.password} />

         <Button onClick={console.log('submit this ')}>Login</Button>
         </div>
         );
    }
}
 
export default SignIn;