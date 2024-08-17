const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(
    prompt("Adivina cual es el número entre el 1 al 10")
);

console.log(`este es el número con el que juegas ${numeroJugador}`);