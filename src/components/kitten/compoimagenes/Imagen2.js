import React from 'react';

function Imagen2() {
  // Import result is the URL of your image
  return (
    <div className="imagenkitten">
    <img src={require("../../../assets/img/kittens06.jpg")} alt="kitten" width="30%"/>
    
    </div>
  );
}

export default Imagen2;