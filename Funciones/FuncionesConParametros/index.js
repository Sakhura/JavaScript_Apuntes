function mostrarComprendidos(inicio, fin) {
    for (let f = inicio; f <= fin; f++) {
        document.write(f + ' ');
    }
}

let valor1 = parseInt(prompt('Ingrese valor inferior:'));
let valor2 = parseInt(prompt('Ingrese valor superior:'));
mostrarComprendidos(valor1, valor2);