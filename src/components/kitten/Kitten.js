import React, { Component } from "react";
import "../../css/kitten.css";


//compo imagenes gatitos
import Imagen from "./compoimagenes/Imagen";
import Imagen1 from "./compoimagenes/Imagen1";
import Imagen2 from "./compoimagenes/Imagen2";
import Imagen3 from "./compoimagenes/Imagen3";
import Imagen4 from "./compoimagenes/Imagen4";
import Imagen5 from "./compoimagenes/Imagen5";


//compos drag
import ReactDOM from 'react-dom';
import posed from 'react-pose';



const Box = posed.div({
  draggable: true,
  init: { scale: 1 },
  drag: { scale: 1.2 },
  dragEnd: { scale: 0.5 }
});

const Label = posed.span({
  init: { color: '#000' },
  drag: { color: '#f00' }
});

function Kitten() {
    return (
    <section className="contieneDrag">
      <h1>UUUUIII! gatitos traviesos!</h1>
      <h1>¿Podrias ayudarme a colocarlas?</h1>
    <Box className="box"> 
      <Label className="label">
      
         <Imagen  />
      
      </Label>
      
    </Box>
    <Box className="box"> 
      <Label className="label">
      
         <Imagen1  />
      
      </Label>
      
    </Box>
    <Box className="box"> 
      <Label className="label">
      
         <Imagen2  />
      
      </Label>
      
    </Box>
    <Box className="box"> 
      <Label className="label">
      
         <Imagen3  />
      
      </Label>
      
    </Box>
    <Box className="box"> 
      <Label className="label">
      
         <Imagen4  />
      
      </Label>
      
    </Box>
    <Box className="box"> 
      <Label className="label">
      
         <Imagen5  />
      
      </Label>
      
    </Box>
    </section>  
    );
  }

//con array
/*
const imageList=[
    {
     img : require("../../assets/img/kittens01.jpg")},
    {
    img : require("../../assets/img/kittens01.jpg")}

];
function Kitten(imageList) {
  return (
    <Box className="box">
        
    <Label className="label">Drag me
    {imageList.map(imagen =>{
       <Imagen img={imagen.img} />
    })}
    </Label>
    
  </Box>
    
  );
}*/
//selector al unico id del html si no hay que hacerlo contructor react
const rootElement = document.getElementById('root');

ReactDOM.render(<Kitten />, rootElement);


export default Kitten;
