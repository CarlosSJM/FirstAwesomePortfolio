import React, { Component } from 'react';
import logo from './logo.svg';
import StickyFooter from 'react-sticky-footer';
import './css/App.css';
import Menu from './components/header/Menu'
import AvatarProfile from './components/avatar/AvatarProfile'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="App-header">
          <AvatarProfile />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Carlos San Juan Martín</h2>
          
        </div>
        
        <p className="App-intro">
         Full Stack Developer 
        </p>
        
        <div>
          <Menu/>
          
        </div>
        

        <StickyFooter
    bottomThreshold={50}
    normalStyles={{
    backgroundColor: "#999999",
    padding: "2rem"
    }}
    stickyStyles={{
    backgroundColor: "rgba(255,255,255,.8)",
    padding: "2rem",
    borderTopRightRadius: 10
    }}
>   
    <img src={logo} className="App-logo" alt="logo" />
     <strong>Carlos.sjmartin@gmail.com</strong>
     </StickyFooter>
      </div>
    );
  }
}

export default App;
