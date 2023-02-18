import React from 'react';

const width1 = {    //! Se ajusta el fieldset a las imagenes, pero las corre a la derecha.
   width: 200,
   background: "green"   //! Le pone color al fieldset.
   
};

export default function Card({name, species, gender, image, onClose}) {
   return (
      
         <div>
            <fieldset style={width1}> 
            <button onClick={onClose}>X</button>
            <h1><strong>Name: {name}</strong></h1>
            <h2>Species: {species}</h2>
            <h3>Gender: {gender}</h3>
            <img  src={image} alt={name} />
            </fieldset> 
         </div>
      
   );
}
//module.exports = Card;
//export default Card;