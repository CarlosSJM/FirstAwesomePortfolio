import React from 'react';

function Imagen1() {
  // Import result is the URL of your image
  return (
    <div className="imagenkitten">
    <img src={require("../../../assets/img/kittens04.jpg")} alt="kitten" width="30%"/>
    
    </div>
  );
}

export default Imagen1;