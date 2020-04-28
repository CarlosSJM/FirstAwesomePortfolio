import React, { Component } from "react";
import "../../css/profile.css";

import SingleLineGridList from "../../components/carrousel/SingleLineGridList";
// import { makeStyles } from "@material-ui/core/styles";
import Img from '../../assets/img/meakira.JPG';


function Profile() {

  return (
    <div>
      <h4></h4>
      <section className="profile">
            <div className="shadow">
              <img className="img-portada" src={Img} alt="img" />
            </div>
            <span className="text-profile">
              <div class="block">¡Imagina! ¡Imagina! por un instante..... que existe una profesión...que es un hobby para ti, imagina que puedes dar rienda suelta a toda tu curiosidad.... ¡Espera un momento!, no puede ser verdad.... Si existe un camino y para mi es ser Desarrollador. 
              </div>
              <div class="block">¡Pues manos a la obra! comencé en la programación con un curso de Programación orientada a objetos en Java, y continuo mi formación con la Bootcamp de <strong>Upgrade-Hub “Full Stack Web Developer”</strong> en el que he aprendido tecnologías y mejorado habilidades tanto Front-End como Back-End. 
              </div>
              <div class="block">En mi etapa en el sector de la investigación científica e industria farmacéutica, desarrollé habilidades tales como capacidad de análisis, trabajar con standard’s, metodología, capacidad de acotar y resolver problemas complejos, así como bases de datos y programas estadísticos, implementar nuevos ensayos, así como guiar y colaborar con nuevos investigadores. 
              </div>
              <div class="block">Anteriormente en el sector comercial combinaba mis anteriores habilidades unidas con el trato con clientes y coordinación, así como el diseño, creación y mantenimiento posterior de proyectos.
              </div>  
              <div class="block">En estos primeros pasos en un nuevo camino tanto profesional como creativo, me gustaría compartir un poquito de las ganas y ilusión, con las que inicie en este nuevo reto.
              </div> 
            </span>

      </section>
      <h4>Algunos de mis trabajos como acuarista</h4>
      <SingleLineGridList />
      <h4>Citas Célebres de programación</h4>
      <ul className="ulresp">
         <li className="liresp">«Programar hoy es una carrera entre los ingenieros de software tratando de construir más grandes y mejores programas a prueba de tontos y el universo tratando de crear idiotas más grandes y mejores. Hasta ahora el universo está ganando.»
         <span className="spanresp">Rick Cook</span></li>
         <li className="liresp">«No te preocupes si no funciona bien. Si todo lo hiciera, no tendrías trabajo.»
         <span className="spanresp">La ley de Mosher</span></li>
         <li className="liresp"> «Cuando alguien dice: ‘Quiero un lenguaje de programacion en el que sólo tenga que decir lo que quiero que haga’, dénle una paleta.»
         <span className="spanresp">Alan J. Perlis</span></li>
         <li className="liresp">«Cualquiera puede hablar. Enséñame el código.»
         <span className="spanresp">Linus Torvalds</span></li>
         <li className="liresp">«En teoría, la teoría y la práctica son lo mismo. En la práctica, no.»
         <span className="spanresp">Yoggi Berra</span></li>
     </ul>
    </div>
  );
}

export default Profile;
