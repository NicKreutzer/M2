//! Boton ver amigos.
$('#boton').click(function(){
        var lista = $('#lista')
        lista.empty()
    $.get('http://localhost:5000/amigos', response => {
        for (let i = 0; i < response.length; i++) {
            lista.append(`<li>${response[i].name}</li>`) 
        }
    })
});

//! Buscar amigo.
//todo $('#search').click(function(){
//todo     var id = $('#input').val()
//todo     $.get(`http://localhost:5000/amigos/${id}`, response =>{
//todo         $('#amigo').text(response.name)  //* getElementById('amigo').innerHTML = response.name
//todo     })
//todo })

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
            $('#success').text(`Amigo numero ${id} borrado con exito`)
        }
    })
})