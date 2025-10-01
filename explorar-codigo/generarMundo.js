onload = function() {
    var dificultad = localStorage.getItem("dificultad");
    if (dificultad == 1) {
        dificultad = 1;
        document.getElementById("mundoT").innerHTML = "Estás en: un bosque";
    }
    if (dificultad == 2) {
        dificultad = 2;
        document.getElementById("mundoT").innerHTML = "Estás en: una montaña";
    }
    if (dificultad == 3) {
        dificultad = 3;
        document.getElementById("mundoT").innerHTML = "Estás en: el Infierno";
    }
    if (dificultad == null) {
        document.getElementById("juego").innerHTML = "<a href=\"index.html\">Volver al inicio</a>";
    }
}
function explorar() {
    var dificultad = localStorage.getItem("dificultad");
    var nivel = localStorage.getItem("nivel");

}