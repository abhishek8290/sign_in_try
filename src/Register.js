import React,{Component} from 'react';
import { Button, Input, Checkbox } from 'antd';

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
            <div> username </div>
          <Input
            name='username'
            placeholder='Username'
            onChange={e => this.onChange(e)}
            value={this.state.username} />
            
            <div> Email Id </div>
            
          <Input
            name='email'
            placeholder='Email'
            onChange={e => this.onChange(e)}
            value={this.state.email} />
            <div> Password </div>
          <Input
            name='password'
            placeholder='Password'
            type='password'
            onChange={e => this.onChange(e)}
            value={this.state.password} />
         
         <button onClick={console.log('submit this ')}>Register</button>
         
         </div>
      
        
      );
    }
  }

  export default Register;