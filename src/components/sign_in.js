import React, { Component } from 'react';
import { Button, Input, Checkbox } from 'antd';

<<<<<<< HEAD:src/components/sign_in.js
class SignIn extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
=======
class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password : '',

    }

  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

onSubmit = async () => {
  const response = await this.props.mutate({
    variables: this.state,
  });
  console.log(response);
}
    render() {
      return (
        
          <div>
>>>>>>> 6d4905474abd087f1d9f96ce3937e136e7f92eb4:src/Login.js
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