import React from "react";

const studentName = "Nicolas Exequiel Kreutzer.";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };



export default function Bienvenido() {
 
  return(
    <div>
      <h1><strong><u>Primer diseño.</u></strong></h1>
      <br></br>
      <fieldset>
      <h3><em><u>{studentName}</u></em></h3>
      <br></br>
      <ul>{techSkills.map((skill, index) => ( /*Iteramos sobre los elementos del array techSkills y Retornamos un elemento li por cada Skill */
          <li key={index}>{skill}</li>        /*Con su contenido correspondiente y clave unica definida por el indice del elemento en el array */
        ))}</ul>                           
      </fieldset>
    </div>
  )
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
