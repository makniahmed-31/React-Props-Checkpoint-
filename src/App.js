import React, { Component } from 'react';
import './App.css';
import Profile from './profile/Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      Infos:[
        {fullname:"Ahmed Makni",bio:"Ingenieur",profession:"Developpeur FullStack JS"
        }
          ],
          url:"https://png.pngtree.com/png-clipart/20190903/original/pngtree-couple-boy-cute-avatar-png-image_4445471.jpg"
  }
}
     handleName=(x)=>{
      alert(x )
  }
  render() { 
    return (    
       <div className="App" style={{display:'inline'}}>
         
    <Profile handleName={this.handleName} Infos={this.state.Infos[0]} >{this.state.url}</Profile>
  </div>
);
  }
}
export default App;
