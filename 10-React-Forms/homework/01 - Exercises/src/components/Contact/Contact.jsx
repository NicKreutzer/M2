import React, { useState } from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(objetoInputs){
  
  const errors={};

  if (!objetoInputs.name) {
    errors.name = 'Se requiere un nombre.'
    }
  else if (objetoInputs.name.length < 15) 
    errors.name = "Debe ingresar nombre completo."

  if (!regexEmail.test(objetoInputs.email))
    errors.email = 'Debe ser un correo electrónico.'
    
  if(!objetoInputs.message)
    errors.message = "Se requiere un mensaje."
    
  return errors;
};


export default function Contact () {

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange =  (event) => {
    console.log(inputs);
    setInputs ({...inputs, [event.target.name] : event.target.value});
    setErrors (validate({...inputs,[event.target.name] : event.target.value}));
  };

  function handleSubmit(event){
    event.preventDefault();
    const props = Object.entries(errors); //! Array con props.
    if(props.length === 0){
      alert("Datos completos");
      setInputs({
        name: '',
        email: '',
        message: '',
      })
      setErrors(validate({
        name: '',
        email: '',
        message: '',
      })
    );
  }else{ alert ("Debe llenar todos los campos")}
}

  return (
  <div>
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
        <input 
        name= "name" 
        value={inputs.name} 
        placeholder="Escribe tu nombre..." 
        type= "text"
        onChange={handleChange}
        className={errors.name && 'warning'}
        >
        </input>
        <p className='danger'>{errors.name}</p>
      <label>Correo Electrónico:</label>
        <input 
        name= "email" 
        value={inputs.email} 
        placeholder='Escribe tu email...' 
        type= "text"
        onChange={handleChange}
        className={errors.email && 'warning'}
        > 
        </input>
        <p className='danger'>{errors.email}</p>
      <label>Mensaje:</label>
        <textarea 
        name= "message" 
        value={inputs.message} 
        placeholder="Escribe tu mensaje..." 
        type= "text"
        onChange={handleChange}
        className={errors.message && 'warning'}
        >
        </textarea>
        <p className='danger'>{errors.message}</p>
      <button 
      type="submit"
      // disabled={Object.entries(errors).length === 0 ? false : true}
      >Enviar </button>
    </form>
    Crear Formulario
  </div>)
}
