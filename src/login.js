import  React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Buttons} from './button';
import { Card,CardBody,CardTitle,Col } from 'reactstrap';
import Background from './image.jpg';
const backg = '#3399ff'; 



export class Login extends Component {
   
    constructor(props){
        super(props);
        this.state ={color:backg};
        this.state ={
            user :'',
            passwd : ''

        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(user,passwd){

        if((user !=null) && (passwd !=null) ){
            alert("Sucess");
            
        }
        // if ((user !='') && (passwd !='')){
        //    ReactDOM.render(succes,document.getElementById('root'));
        // }
    }

    render(){

        return(
<div  >
            <div >

    <Card className="shadow-box-example hoverable" style={{ borderRadius: 10, backgroundImage: `url(${Background})` }}>

            <CardBody  >
            <CardTitle style={{color:'#0f0f0f',borderRadius: 10}}>LOGIN FORM</CardTitle>
                    <form class="form-horizontal" >
                    
                    <div class="form-group" >
                
        <input type="text" class="form-control" id="usr" placeholder="USERNAME" name="user"></input>
        
        </div>
        <div>
    
        <input type="password" class="form-control" id="pwd" placeholder="PASSWORD" name="passwd"></input>
        </div>
        <br/>
        <Buttons  onSubmit={this.handleClick(this.state.user,this.state.passwd)}/>
        </form>
                    </CardBody>
                
                </Card>
                </div>

{/* <div>

<Card className="shadow-box-example hoverable" style={{ backgroundColor:this.state.color , borderRadius: 10 }}>

        <CardBody  >
        <CardTitle style={{color:'#0f0f0f',borderRadius: 10}}>LOGIN FROM</CardTitle>
                <form class="form-horizontal" >
                
                <div class="form-group">
            
    <input type="text" class="form-control" id="usr" placeholder="USERNAME" name="user"></input>
    
    </div>
    <div>

    <input type="password" class="form-control" id="pwd" placeholder="PASSWORD" name="passwd"></input>
    </div>
    <br/>
    <Buttons  onSubmit={this.handleClick(this.state.user,this.state.passwd)}/>
    </form>
                </CardBody>
            
            </Card>
            </div> */}
            </div>
        );
    }




}

export default Login;