function calcularTabla() {
    let valor = parseInt(prompt("Ingrese que tabla de multiplicar quiere obtener"))
    for (let f = 1; f <= 10; f++) {
        let tabla = f * valor;
        document.write(f + " * " + valor + " = " + tabla + '<br>')

    }
}

calcularTabla();