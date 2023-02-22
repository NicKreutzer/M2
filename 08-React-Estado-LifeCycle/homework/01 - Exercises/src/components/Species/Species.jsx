import React from 'react'

function Species ({species, handleSpecies, handleAllSpecies}) {

  return (
    <div>
        <h2>Species</h2>
        {
          species.map((especie, index)=>{
            return(
              <button key={index} onClick={handleSpecies} value={especie}>{especie}</button>
            )
          })
        }
        <button onClick={handleAllSpecies}>All Animals</button>
    </div>
  )
}

export default Species;