import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import './Zoo.module.css';



export default function Zoo() {

   const [zoo, setZoo] = React.useState ({
      zooName: '',
      animals: [],
      species: [],
      allAnimals: []
   })

   const handleInpuntChange = (event) =>{
      setZoo({
         ...zoo,    // -Spread operator, copia el valor para no perderlo.
         zooName: event.target.value,
      })
   };

   React.useEffect(() => {
      fetch('http://localhost:3001/zoo')
      .then((res) => res.json())
      .then((data) =>
            setZoo({
                  ...zoo,
                  animals: data.animals,
                  species: data.species,
                  allAnimals: data.animals,
      })
   )
   .catch((error) => console.log(error));
   }, []);

   const handleSpecies= (event)=>{
      const specie = event.target.value;
      setZoo({
         ...zoo,
         animals: zoo.allAnimals.filter(animal => animal.specie === specie)
      })
   };

   const handleAllSpecies = (event)=>{
      setZoo({
         ...zoo,
         animals: zoo.allAnimals
      })
   }

   return (
      <div>
         <label>Zoo Name:</label>
         <input value= {zoo.zooName} onChange={handleInpuntChange}></input>
         <h1>{zoo.zooName}</h1>

         <Species 
            species={zoo.species}
            handleSpecies={handleSpecies}
            handleAllSpecies={handleAllSpecies}/>

         <Animals animals={zoo.animals}/>
      </div>
   );
}
