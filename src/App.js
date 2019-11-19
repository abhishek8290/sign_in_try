import React, { Component } from 'react';
import Header from './components/header';
import Body from './components/body';

class App extends Component {
   render() { 
    return (  
      <React.Fragment>
      <Header/>
      <Body/>
      </React.Fragment>
    );
  
  }
}
 
export default App;