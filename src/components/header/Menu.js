import React, { Component } from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Profile from '../../components/profile/Profile'
import Skills from '../../components/skills/Skills'
import "../../css/menu.css";
import Kitten from "../kitten/Kitten";

  function Menu() {
    const [value, setValue] = React.useState(0);
  
    function handleChange(event, newValue) {
      setValue(newValue);
    }

    return (
      <div className="menu">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          >
          <Tab label="Quien soy" />
          <Tab label="Tecnologias" />
          <Tab label="kittens" />
        </Tabs>
        { value === 0 ? <Profile/> : "" }
        { value === 1 ? <Skills /> : "" }
        { value === 2 ? <Kitten /> : "" }
        <div id='menu'></div>
      </div>
      
    );
  }
  
  export default Menu;