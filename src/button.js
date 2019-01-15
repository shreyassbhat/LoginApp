import React, { Component } from 'react';
import { Button } from 'react-materialize';

const green = '#39D1B4';
export class Buttons extends Component {
    constructor(props){
        super(props);
        this.state = {color: green};
        


    }
   
    render() {
        return (
           
                <Button  style={{background:this.state.color}}>Login</Button>
          
        )
    }


}
export default Buttons;