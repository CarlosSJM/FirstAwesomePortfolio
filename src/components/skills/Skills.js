import React, { Component } from "react";
import "../../css/skills.css";

import Cards from "../../components/skills/Cards";


//imagenes que no aceptan require
//import imagesymfo from '../../assets/img/icon-symfo.png';

const cardlist = [
  {
    name: "JS",
    img: require("../../assets/img/icon-js.png"),
    subheader: "29 mayo 2019",
    description: "JavaScript (abreviado comúnmente JS) es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos,3​ basado en prototipos, imperativo, débilmente tipado y dinámico."
  },
  {
    name: "React",
    img: require("../../assets/img/icon-react.jpg"),
    subheader: "29 mayo 2019",
    description: "React es una biblioteca escrita en JavaScript, desarrollada en Facebook para facilitar la creación de componentes interactivos, reutilizables, para interfaces de usuario. Se utiliza en Facebook para la producción de componentes, e Instagram está escrito enteramente en React."
  },
  {
    name: "Java",
    img: require("../../assets/img/icon-java.png"),
    subheader: "05 octubre 2018",
    description: "Java es un lenguaje de programación de propósito general, concurrente, orientado a objetos, que fue diseñado específicamente para tener tan pocas dependencias de implementación como fuera posible. Su intención es permitir que los desarrolladores de aplicaciones escriban el programa una vez y lo ejecuten en cualquier dispositivo (conocido en inglés como WORA, o write once, run anywhere)."
  },
  {
    name: "HTML5",
    img: require("../../assets/img/icon-html.png"),
    subheader: "29 julio 2018",
    description: "HTML5 (HyperText Markup Language, versión 5) es la quinta revisión importante del lenguaje básico de la World Wide Web, HTML. HTML5 especifica dos variantes de sintaxis para HTML: una «clásica», HTML (text/html), conocida como HTML5, y una variante XHTML conocida como sintaxis XHTML5 que deberá servirse con sintaxis XML (application/xhtml+xml).1​2​ Esta es la primera vez que HTML y XHTML se han desarrollado en paralelo. La versión definitiva de la quinta revisión del estándar se publicó en octubre de 2014."
  },
  {
    name: "CSS3",
    img: require("../../assets/img/icon-css.png"),
    subheader: "29 mayo 2019",
    description: "CSS (siglas en inglés de Cascading Style Sheets), en español (Hojas de estilo en cascada), es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.2​ Es muy usado para establecer el diseño visual de los documentos web, e interfaces de usuario escritas en HTML o XHTML; el lenguaje puede ser aplicado a cualquier documento XML, incluyendo XHTML, SVG, XUL, RSS, etcétera. También permite aplicar estilos no visuales, como las hojas de estilo auditivas."
  },
  {
    name: "PHP",
    img: require("../../assets/img/icon-php.png"),
    subheader: "29 mayo 2019",
    description: "PHP, acrónimo recursivo en inglés de PHP: Hypertext Preprocessor (preprocesador de hipertexto), es un lenguaje de programación de propósito general de código del lado del servidor originalmente diseñado para el desarrollo web de contenido dinámico. Fue uno de los primeros lenguajes de programación del lado del servidor que se podían incorporar directamente en un documento HTML en lugar de llamar a un archivo externo que procese los datos. El código es interpretado por un servidor web con un módulo de procesador de PHP que genera el HTML resultante."
  },
  {
    name: "Symphony",
    img: require("../../assets/img/icon-symfo.png"),
    subheader: "29 mayo 2019",
    description: "Symfony es un framework diseñado para desarrollar aplicaciones web basado en el patrón Modelo Vista Controlador. Para empezar, separa la lógica de negocio, la lógica de servidor y la presentación de la aplicación web. Proporciona varias herramientas y clases encaminadas a reducir el tiempo de desarrollo de una aplicación web compleja. Además, automatiza las tareas más comunes, permitiendo al desarrollador dedicarse por completo a los aspectos específicos de cada aplicación."
  },
  {
    name: "Node",
    img: require("../../assets/img/icon-node.png"),
    subheader: "29 mayo 2019",
    description: "Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación ECMAScript, asíncrono, con I/O de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google. Fue creado con el enfoque de ser útil en la creación de programas de red altamente escalables, como por ejemplo, servidores web.4​ Fue creado por Ryan Dahl en 2009 y su evolución está apadrinada por la empresa Joyent, que además tiene contratado a Dahl en plantilla"
  },
  {
    name: "MongoDB",
    img: require("../../assets/img/icon-mongo.png"),
    subheader: "29 mayo 2019",
    description: "MongoDB, en lugar de guardar los datos en tablas, tal y como se hace en las bases de datos relacionales, MongoDB guarda estructuras de datos BSON (una especificación similar a JSON) con un esquema dinámico, haciendo que la integración de los datos en ciertas aplicaciones sea más fácil y rápida."
  },
  {
    name: "MySQL",
    img: require("../../assets/img/icon-mysql.png"),
    subheader: "29 mayo 2019",
    description: "MySQL es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual: Licencia pública general/Licencia comercial por Oracle Corporation y está considerada como la base datos de código abierto más popular del mundo, y una de las más populares en general junto a Oracle y Microsoft SQL Server, sobre todo para entornos de desarrollo web."
  },
  {
    name: "Angular",
    img: require("../../assets/img/icon-angular.svg"),
    subheader: "29 mayo 2019",
    description: "Angular (comúnmente llamado Angular 2+), es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página. Su objetivo es aumentar las aplicaciones basadas en navegador con capacidad de Modelo Vista Controlador (MVC), en un esfuerzo para hacer que el desarrollo y las pruebas sean más fáciles."
  },
  {
    name: "Docker",
    img: require("../../assets/img/icon-docker.png"),
    subheader: "29 mayo 2019",
    description: "Docker es un proyecto de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software, proporcionando una capa adicional de abstracción y automatización de virtualización de aplicaciones en múltiples sistemas operativos."
  },
  {
    name: "ESlint",
    img: require("../../assets/img/icon-eslint.jpg"),
    subheader: "29 mayo 2019",
    description: "ESLint es una herramienta de linting para Javascript, un linter es un programa que se encarga de revisar el código escrito y es capaz de señalar errores y posibles bugs que podemos corregir para mejorar nuestros programas."
  }
];
//faltaria redux gulp y algunas mas
function Skills() {
  return (
    <div className="skills">
      {cardlist.map(card => {
        return (
          <div className="contienecard">
          <Cards
            name={card.name}
            img={card.img}
            subheader={card.subheader}
            description={card.description}
          />
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
