//todo        FETCH sacado de GPT.
//*           Otra manera de hacerlo.
//!           Botones.
//?           Profesor.


//! Boton ver amigos.
let getAmigos =  () => {
    var lista = $('#lista')
    lista.empty()
$.get('http://localhost:5000/amigos', response => {
    for (let i = 0; i < response.length; i++) {
        lista.append(`<li>${response[i].name}</li>`) 
    }
})
}
$('#boton').click(getAmigos)//(function(){
    //     var lista = $('#lista')
    //     lista.empty()
    // $.get('http://localhost:5000/amigos', response => {
    //     for (let i = 0; i < response.length; i++) {
    //         lista.append(`<li>${response[i].name}</li>`) 
    //     }
    // })
//});
//todo document.getElementById('boton').addEventListener('click', () => {
//todo     const lista = document.getElementById('lista');
//todo     lista.innerHTML = '';
//todo     fetch('http://localhost:5000/amigos')
//todo       .then(response => response.json())
//todo       .then(data => {
//todo         for (let i = 0; i < data.length; i++) {
//todo           lista.innerHTML += `<li>${data[i].name}</li>`;
//todo         }
//todo       })
//todo       .catch(error => console.error('Error:', error));
//todo   });

//! Buscar amigo.
//*  $('#search').click(function(){
//*      var id = $('#input').val()
//*      $.get(`http://localhost:5000/amigos/${id}`, response =>{
//*          $('#amigo').text(response.name)  //* getElementById('amigo').innerHTML = response.name
//*      })
//*  })

//todo document.getElementById('search').addEventListener('click', () => {
//todo     const id = document.getElementById('input').value;
//todo     fetch(`http://localhost:5000/amigos/${id}`)
//todo       .then(response => response.json())
//todo       .then(data => {
//todo         document.getElementById('amigo').innerHTML = data.name;
//todo       })
//todo       .catch(error => console.error('Error:', error));
//todo   });

$('#search').click(function(){
    let input = document.querySelector('#input')
    if(!input.value){
        let mensaje = document.querySelector('#amigo')
        mensaje.innerText = "Ingrese el numero de id"
    }
    $.get("http://localhost:5000/amigos/" + input.value, function (data){
        console.log(data);
        let span = document.querySelector('#amigo');
        span.textContent = data.name
        //input.value = "";
    })
})

//! Delete amigo.
$('#delete').click(()=>{
    var id = $('#inputDelete').val()
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: "DELETE",
        success: ()=> {
            $('#success').text(`Amigo numero ${id} borrado con exito`), 
            getAmigos()
        }
    })
})
//todo document.getElementById('delete').addEventListener('click', () => {
//todo     const id = document.getElementById('inputDelete').value;
//todo     fetch(`http://localhost:5000/amigos/${id}`, {
//todo       method: 'DELETE'
//todo     })
//todo       .then(response => {
//todo         if (response.ok) {
//todo           document.getElementById('success').innerHTML = `Amigo numero ${id} borrado con exito`;
//todo         } else {
//todo           throw new Error('Error al borrar amigo');
//todo         }
//todo       })
//todo       .catch(error => console.error('Error:', error));
//todo   });