function eliminarFondo(){
    var portada = document.getElementById("portada");
    portada.style.display = "none";
}

addEventListener("load", animT);
function animT() {
    setTimeout(eliminarFondo, 4000);
}