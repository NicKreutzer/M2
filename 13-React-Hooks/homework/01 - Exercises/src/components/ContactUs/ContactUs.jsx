import React from "react";

const ContactUs = () => {

  const [form, setForm] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleInput= (event) => {
    setForm({
      ...form,
      [event.target.name] : event.target.value,
      [event.target.email] : event.target.value,
      [event.target.asunto] : event.target.value,
      [event.target.mensaje] : event.target.value
    })
  }


  return (
    <div>
      <form className="contactBg">
        <label htmlFor="nombre">Nombre: </label>
        <input onChange={handleInput} name="nombre" value= {form.nombre}/>
        <label htmlFor="email" >Email: </label>
        <input onChange={handleInput} name="email" value= {form.email}/>
        <label htmlFor="asunto" >Asunto: </label>
        <input onChange={handleInput} name="asunto" value= {form.asunto}/>
        <label htmlFor="mensaje" >Mensaje: </label>
        <input onChange={handleInput} name="mensaje" value= {form.mensaje}/>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;
