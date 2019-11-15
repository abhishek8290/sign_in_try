import React, { Component } from 'react';
import { Button, Input, Checkbox } from 'antd';

<<<<<<< HEAD:src/components/sign_up.js
class SignUp extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
=======
class Register extends React.Component {
  constructor(){
    super();
    this.state = {
      username: '',
      email:'',
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
>>>>>>> 6d4905474abd087f1d9f96ce3937e136e7f92eb4:src/Register.js
            <div> username </div>
          <Input
            name='username'
            placeholder='Username'
            onChange={e => this.onChange(e)}
            value={this.state.username} />
            
<<<<<<< HEAD:src/components/sign_up.js
           
=======
            <div> Email Id </div>
            
          <Input
            name='email'
            placeholder='Email'
            onChange={e => this.onChange(e)}
            value={this.state.email} />
>>>>>>> 6d4905474abd087f1d9f96ce3937e136e7f92eb4:src/Register.js
            <div> Password </div>
          <Input
            name='password'
            placeholder='Password'
            type='password'
<<<<<<< HEAD:src/components/sign_up.js
            // onChange={e => this.onChange(e)}
            value={1} />

         <Button onClick={console.log('submit this ')}>Register</Button>
=======
            onChange={e => this.onChange(e)}
            value={this.state.password} />
         
         <button onClick={console.log('submit this ')}>Register</button>
         
>>>>>>> 6d4905474abd087f1d9f96ce3937e136e7f92eb4:src/Register.js
         </div>
         );
    }
}
 
export default SignUp;