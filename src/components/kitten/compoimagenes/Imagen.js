import React from 'react';
import "../../../css/imagen.css";
function Imagen() {
  // Import result is the URL of your image
  return (
    <div className="imagenkitten">
    <img src={require("../../../assets/img/kittens01.jpg")} alt="kitten" width="30%"/>
    
    </div>
  );
}

export default Imagen;