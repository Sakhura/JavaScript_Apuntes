function cargar(sueldos) {
    for (let f = 0; f < sueldos.length; f++) {
        let v = prompt('Ingrese sueldo:');
        sueldos[f] = parseInt(v);
    }
}

function calcularGastos(sueldos) {
    let total = 0;
    for (let f = 0; f < sueldos.length; f++) {
        total = total + sueldos[f];
    }
    document.write('Listado de sueldos<br>');
    for (let f = 0; f < sueldos.length; f++) {
        document.write(sueldos[f] + '<br>');
    }
    document.write('Total de gastos en sueldos:' + total);
}

let sueldos;
sueldos = new Array(5);
cargar(sueldos);
calcularGastos(sueldos);