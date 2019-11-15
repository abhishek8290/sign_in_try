import React, { Component } from 'react';
import Header from "./header";

class Body extends Component {
    state = {  }

    render() { 
        return (
           <div>
                <Header/>
                    <div>Hello, Body!
                        Wassup!!....
                    </div>
                <Header/>
            </div>
          );
    }
}
 
export default Body
;