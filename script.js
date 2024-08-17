// Variables numéricas
let numero = 10;
let decimal = 3.14;

// Variables de texto se puede utilizar comillas simples o dobles
let nombre = 'Sabina';
let apellido = "Romero";

// Variables booleanas
let isAdmin = true;
let isLogged = false;

// Variables de arreglo
let colores = ['rojo', 'verde', 'azul'];
let numeros = [1, 2, 3, 4, 5];

// Variables de objeto
let persona = {
  nombre: 'Sabina',
  apellido: 'Romero',
  edad: 50
};

// Variables de función
function saludar(nombre) {
  console.log(`Hola, ${nombre}!`);
}

// Uso de las variables
console.log(numero); // 10
console.log(decimal); // 3.14
console.log(nombre); // Sabina 
console.log(apellido); // Romero
console.log(isAdmin); // true
console.log(isLogged); // false
console.log(colores); // ['rojo', 'verde', 'azul']
console.log(numeros); // [1, 2, 3, 4, 5]
console.log(persona); // { nombre: 'Sabina', apellido: 'Romero', edad: 50 }
saludar('Sabina'); // Hola, Sabina!

// var

function ejemploVar(){
    console.log(x);
    var x = 10;
    console.log(X) //10
}

// let
function ejemploLet(){
    console.log(x);
    var x = 10;
    console.log(X) //10
}