function controlarCaracteres() {
    if (document.getElementById('curriculum').value.length > 2000) {
        alert('curriculum muy largo');
    } else {
        alert('datos correctos');
    }
}