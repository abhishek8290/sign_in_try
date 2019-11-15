import React, { Component } from 'react';
import { Button, Input, Checkbox } from 'antd';

class SignUp extends Component {
  state = {
    username: '',
    email: '',
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
            
            <div> email </div>
          <Input
            name='email'
            placeholder='email'
            onChange={e => this.onChange(e)}
            value={this.state.email} />
            <div> Password </div>
          <Input
            name='password'
            placeholder='Password'
            type='password'
            onChange={e => this.onChange(e)}
            value={this.state.password} />

         <Button onClick={console.log('submit this ')}>Register</Button>
         </div>
         );
    }
}
 
export default SignUp;