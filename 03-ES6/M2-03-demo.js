// var manzana ="🍎";
// let cereza = "🍒";
// const limon = "🍋";

//! SCCOPE.
var name = "🍎";
function printName(){
    var name = "🍋";
    console.log(name);
}
printName();
console.log(name);

if (true){
    let name = "🍋";
    // const name = "🍋";
    console.log(name);
}

//! Redeclaracion y Reasignacion / Declaracion sin valor inicial.
var manzana; //declarar
var manzana = "🍎";
manana = "manzana";
console.log(manana);

let cereza = "🍒";
//* let cereza =       -No se puede vovler a declarar.
cereza = "cereza"; //* -Se le puede cambiar el valor.

const limon = "🍋";
//* limon = "limon";   -No se le puede asignar otro valor.

//* const limon;       -No se puede declarar y asignarle valor despues.
//* limon = "limon"

//! Const NO es inmutable.
const array = [];  //* -Guarda direccion de memoria.
array.push("🍒");
//* array = ["🍎"];   -NO PERMITIDO.
console.log(array);

//! Propiedad del objeto global.
//* -Var pasa a ser propiedad del objeto global.
//* -Let y Const no pasan a serlo.

//! Hoisting.
//* console.log(manzana);  -Trae Undefined.
//* var manzana = "🍎";
//* let manzana = "🍎";    -Asi trae error. NO HAY HOISTING CON LET
//* const manzana = "🍎";    -Asi trae error. NO HAY HOISTING CON CONST

//! Arrow Functions.
const sum = function(num){
    return num+1;
}
//* const suma = num => num +1;
//* const suma = (num) => num+1;
//* const suma = num => {num+1};
const suma = num => num++;
//* const suma = () => num++;  -Si no recibe parametros () vacios.

var pares = impares.map(v=> v + 1);
var nums = pares.map((v, i) => v + 1);

nums.forEach(v => {
    if(v % 5 === 0)
    cincos.push(v);
});

var bob = {
    name: "Bob",
    friends: ["Jhon", "Homer"],
    printFriends(){
        let that = this;
        this.friends.forEach(function(f){
            console.log(that.name + "knows" + f);
        })
    }
}
bob.printFriends();

var bob = {
    name: "Bob",
    friends: ["jhon", "Homer"],
    printFriends(){
        this.friends.forEach(f =>    //* => -Toma el this del contexto de ejecucion donde se crea
            console.log(this.name + "knows" + f));
        }
    }

//! CLASS.
class Persona {
    constructor(nombre = "Nicolas", apellido = "Kreutzer"){
        this.nombre = nombre,
        this.apellido = apellido
    }
    getNombre(){
        return this.nombre + " " + this.apellido;
    }
}
class Empleado extends Persona{
    constructor (nombre, apellido, empleo, sueldo){
        super(nombre, apellido);   //* -Constructor de Persona (Class a quien etiendo)
        this.empleo = empleo;
        this.sueldo = sueldo;
    }
    getEmpleo(){
        return this.empleo + "($" + this.sueldo + ")";
    }
}

//! Objetos literales.
//* var obj = new Object();
//* var arr = new Array();
const obj = {}; //* -Obj literal.
const arr = []; //* -Arr literal.

//! Atajo propiedad propiedad.
function prueba(nombre, apellido){   //* -Simplifica la sintaxis.
    return{
        nombre, //nombre: nombre,
        apellido //apellido: apellido
    }
}

//! Nombre de propiedad dinamico.
function prueba(nombre, apellido, prop, valor){   
    return{
        nombre: nombre,
        apellido: apellido,
        [prop]: valor         //* -Esa propiedad prop toma el valor
    }
}
console.log(prueba("Homero", "Simpson", "edad", 40));

//! Template Strings.
// const nombre = "Homero";
// console.log("Hola " + nombre + "¿Como estas?");
// console.log(`Hola ${nombre} ¿Como estas?`); //? -Alt 96 para ``

//! Destructuring.
let arra = [1, 2, 3, 4, 5];
let [a, b, ,c] = arra;
console.log(c); //4

let persona = {
    nombre: "Homero",
    apellido: "Simpson",
    edad: 40
}
console.log(persona.nombre); //Homero
let {nombre, apellido} = persona;  //* Guardo nombre y apellido sacado de persona.
console.log(nombre); //Homero

//! Default + Rest + Spread.
// function suma(x, y){
//     return x + y
// }
// suma(2); //* -Toma x=2 y=null
function suma (x, y=2){
    return x + y
}
console.log(suma(2)); //4

        //! Rest Operator.
        function suma (x, ...y){            //* -(...y) = todos los parametros que me pasen (Rest Operator)
            console.log(x); //2             //* -x toma el primer valor
            console.log(y); //[3, 4, 5, 6]  //* -y toma todos los demas
            let contador = x;
            for(const num of y){
                contador += num;
            }
            return contador;
        }
        console.log(suma(2, 3, 4, 5, 6));

        //! Spread Operator.
        let array1 = [0, 1];
        let array2 = [2, 3];

        let array3 = [...array2];            //* -Guarda todo lo que tiene el array2
        let array4 = [...array1, ...array2]; //* -Une todo lo del array 1 y todo lo del array2

//! Promesas.   
function timeout(duration = 0){
    return new Promise ((resolve, reject)=>{
        setTimeout(resolve, duration);
    })
}     

var p = timeout(1000).then(()=>{
    return timeout(2000);
}).then(()=>{
    throw new Error("hmm");
}).catch(err=>{
    return Promise.all([timeout(100).timeout(200)]);
})