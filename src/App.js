import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigations/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Particle from 'react-particles-js';
import FaceRecon from './components/FaceRecon/FaceRecon'
import ImageFormLink from './components/ImageFormLink/ImageFormLink';
import Sign from './components/Sign/Sign';
import Register from './components/Register/Register';
import 'tachyons';

const particleOption = {
  particles:{
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
    line_linked:{
      shadow:{
        enable:true,
        color:"#3CA901",
        blur:5
      }
    }
  }
}
}
}
class App extends Component {

  constructor (){
    super();
    this.state = {
      input:'',
      imgUrl:'',
      route:'',
      isSignedIn:false,
    }
  }

  onInputChange = (event) => {
     console.log(event.target.value)
     this.setState({input:event.target.value});
  }

  onRouteChange = (route) =>{
    if(route === 'signout'){
      this.setState({isSignedIn:false})
    }
     if(route === 'signin'){
      this.setState({isSignedIn:true})
    }
    this.setState({route:route})
  }

  onButtonClick = () =>
  {
    this.setState({imgUrl:this.state.input})
  }
  render() {
    return (
       <div className="App">
          <Particle className='particles' 
             params={particleOption}
          />
          <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}></Navigation>
            {this.state.route==='home'
              ?<div><Logo></Logo>
              <Rank></Rank>
              <ImageFormLink  onButtonClick={this.onButtonClick}  onInputChange={this.onInputChange}></ImageFormLink>
              <FaceRecon imgUrl={this.state.imgUrl}></FaceRecon>
            </div>
            
            :(
              this.state.route==='Register'
              ?<Register onRouteChange={this.onRouteChange}></Register>
              :<Sign onRouteChange={this.onRouteChange}></Sign>  
            )
           }
          
         {/*
          <FaceDetect></FaceDetect>*/}
       </div>
    );
  }
}

export default App;
