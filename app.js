let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    console.log(amigo);

    if (esTextoValido(amigo)) {
        amigos.push(amigo);
        console.log(amigos);
    } else {
        alert("Solo se permiten letras y espacios.");
    }
    limpiarCaja();
    listaAmigos();

}
function listaAmigos() {

    document.getElementById("listaAmigos").innerHTML = "";

    for (var i = 0; i < amigos.length; i++) {
        console.log(amigos[i]);
        document.getElementById("listaAmigos").innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    /* Se usa el @Math.random(...) para obtener un num 0 a 1 con la multi se amplia el rango
    Math.floor(...) Redondea hacia abajo al entero más cercano.*/

    if(amigos.length === 0){
        alert("No hay elementos para recorrer");
    } else {
        let amigoSorteado = Math.floor(Math.random() * amigos.length);
        document.getElementById("resultado").innerHTML += `<li>${amigos[amigoSorteado]}</li>`;
    }
}

function esTextoValido(amigo) {
    if (typeof amigo !== "string") return false;
    if (!amigo.trim()) return false;

    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(amigo);
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
