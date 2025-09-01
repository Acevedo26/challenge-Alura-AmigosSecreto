let amigos = [];

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    console.log(amigo);

    if (esTextoValido(amigo)){
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

    for(var i = 0; i < amigos.length; i++){
       console.log(amigos[i]);
        document.getElementById("listaAmigos").innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function esTextoValido(amigo) {
  if (typeof amigo !== "string") return false; 
  if (!amigo.trim()) return false;

  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  return regex.test(amigo);
}  

function limpiarCaja(){
   document.querySelector('#amigo'). value = '';
}
