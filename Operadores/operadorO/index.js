let num1, num2, num3;
        num1 = prompt('Ingrese primer número:');
        num2 = prompt('Ingrese segundo número:');
        num3 = prompt('Ingrese tercer número:');
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        num3 = parseInt(num3);
        if (num1 > num2 && num1 > num3) {
            document.write('el mayor es el ' + num1);
        } else {
            if (num2 > num3) {
                document.write('el mayor es el ' + num2);
            } else {
                document.write('el mayor es el ' + num3);
            }
        }