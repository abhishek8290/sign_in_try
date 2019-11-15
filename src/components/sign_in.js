import React, { Component } from 'react';
import { Button, Input, Checkbox } from 'antd';

class SignIn extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <div> username </div>
          <Input
            name='username'
            placeholder='Username'
            // onChange={e => this.onChange(e)}
            value={1} />
            
           
            <div> Password </div>
          <Input
            name='password'
            placeholder='Password'
            type='password'
            // onChange={e => this.onChange(e)}
            value={1} />

         <Button onClick={console.log('submit this ')}>Login</Button>
         </div>
         );
    }
}
 
export default SignIn;