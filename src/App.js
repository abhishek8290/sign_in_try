import React,{Component} from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import { Button, Input, Checkbox } from 'antd';

class Popup extends React.Component {
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
       
       
       </div>
    
      
    );
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div className='app'>
        <h1>hihi</h1>
        <button onClick={this.togglePopup.bind(this)}>SIGN UP</button>
        
        <p>Random Statement to write </p>
        {this.state.showPopup ? 
          <Popup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
};

export default App;