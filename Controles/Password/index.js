function verificar() {
    let clave = document.getElementById('clave').value;
    if (clave.length < 5) {
        alert('La clave no puede tener menos de 5 caracteres!!!');
    } else {
        alert('Largo de clave correcta');
    }
}