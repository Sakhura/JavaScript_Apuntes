let nombre;
        let nota;
        nombre = prompt('Ingrese nombre:');
        nota = parseInt(prompt('Ingrese su nota:'));
        if (nota >= 4) {
            document.write(nombre + ' esta aprobado con un ' + nota);
        }else{
            document.write(nombre + ' esta desaprobado con un ' + nota);
        }