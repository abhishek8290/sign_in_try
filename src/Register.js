import React,{Component} from 'react';
import { Button, Input, Checkbox } from 'antd';

class Register extends React.Component {
    render() {
      return (
        
          <div>
            <div> username </div>
          <Input
            name='username'
            placeholder='Username'
            // onChange={e => this.onChange(e)}
            value={1} />
            
            <div> EmailId </div>
            
          <Input
            name='email'
            placeholder='Email'
            // onChange={e => this.onChange(e)}
            value={1} />
            <div> Password </div>
          <Input
            name='password'
            placeholder='Password'
            type='password'
            // onChange={e => this.onChange(e)}
            value={1} />
         
         <button onClick={console.log('submit this ')}>Register</button>
         
         </div>
      
        
      );
    }
  }

  export default Register;