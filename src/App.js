import React, { Component } from 'react';
import {Button} from './button';
import Login from './login';
import Background from './image.jpg';
import { Form, FormGroup,ControlLabel,FormControl,Checkbox,Col } from "react-form";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundImage: `url(${Background})`}} >
        <header className="App-header">

      <Login/>
      
       
          </header>
        
      </div>
    );
  }
}

export default App;
