import React from 'react';

export default function Card({name, species, gender, image, onClose}) {
   return (
      
         <div>
            <fieldset> 
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