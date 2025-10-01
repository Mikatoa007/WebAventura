// ESTO SON EJEMPLOS
// function generarNumero(){
//     var numero = Math.floor(Math.random() * 20) + 1;
//     document.getElementById("numeroAleatorio").innerHTML = numero;
// }
// function generarNumerotransformarATexto(){
//     var numeroT = Math.floor(Math.random() * 100) + 1;
//     if (numeroT < 50) {
//         document.getElementById("numeroT").innerHTML = "El numero es menor a 50";
//     } else {
//         document.getElementById("numeroT").innerHTML = "El numero es mayor o igual a 50";
//     }
//     alert("El numero es: " + numeroT);
// }
var dificultad = 1;
var nivel = 1;
function cambiarDificultad(){
    var dificultadT = document.getElementById("dificultadT").innerHTML;
    if (dificultadT == "Dificultad actual: No establecida") {
        dificultad = 1;
        nivel = 1;
        document.getElementById("dificultadT").innerHTML = "Dificultad actual: Fácil";
    }
    if (dificultadT == "Dificultad actual: Fácil") {
        nivel = 15;
        dificultad = 2;
        document.getElementById("dificultadT").innerHTML = "Dificultad actual: Normal";
    } else if (dificultadT == "Dificultad actual: Normal") {
        nivel = 30;
        dificultad = 3;
        document.getElementById("dificultadT").innerHTML = "Dificultad actual: Difícil";
    } else {
        nivel = 1;
        dificultad = 1;
        document.getElementById("dificultadT").innerHTML = "Dificultad actual: Fácil";
    }
    localStorage.setItem("nivel", nivel);
    localStorage.setItem("dificultad", dificultad);
}
onload = function() {
    if (localStorage.getItem("dificultad") != null) {
        dificultad = localStorage.getItem("dificultad");
        if (dificultad == 1) {
            document.getElementById("dificultadT").innerHTML = "Dificultad actual: Fácil";
        }
        if (dificultad == 2) {
            document.getElementById("dificultadT").innerHTML = "Dificultad actual: Normal";
        }
        if (dificultad == 3) {
            document.getElementById("dificultadT").innerHTML = "Dificultad actual: Difícil";
        }
    }
}