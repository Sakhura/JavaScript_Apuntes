let x = 1;
        let suma = 0;
        let valor;
        while (x <= 5) {
            valor = parseInt(prompt('Ingrese valor:'));
            suma = suma + valor;
            x = x + 1;
        }
        document.write('La suma de los valores es ' + suma + '<br>');