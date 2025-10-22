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
function difVieja() {
    let dif = localStorage.getItem("dificultad");
    if (dif == 1) {
        document.getElementById("dificultadT").innerHTML = "Dificultad actual: Fácil";
    }
    if (dif == 2) {
        document.getElementById("dificultadT").innerHTML = "Dificultad actual: Normal";
    }
    if (dif == 3) {
        document.getElementById("dificultadT").innerHTML = "Dificultad actual: Difícil";
    }
}
addEventListener("load", difVieja);
function cambiarDificultad(){
    var dificultad = 1;
    var nivel = 1;
    var tiendaPermitida = 0;
    var dificultadT = document.getElementById("dificultadT").innerHTML;
    if (dificultadT == "Dificultad actual: No establecida") {
        dificultad = 1;
        nivel = 1;
        tiendaPermitida = 1;
        document.getElementById("dificultadT").innerHTML = "Dificultad actual: Fácil";
    }
    if (dificultadT == "Dificultad actual: Fácil") {
        nivel = 15;
        dificultad = 2;
        tiendaPermitida = 1;
        document.getElementById("dificultadT").innerHTML = "Dificultad actual: Normal";
    } else if (dificultadT == "Dificultad actual: Normal") {
        nivel = 30;
        dificultad = 3;
        tiendaPermitida = 1;
        document.getElementById("dificultadT").innerHTML = "Dificultad actual: Difícil";
    } else {
        nivel = 1;
        dificultad = 1;
        tiendaPermitida = 1;
        document.getElementById("dificultadT").innerHTML = "Dificultad actual: Fácil";
    }
    localStorage.setItem("nivel", nivel);
    localStorage.setItem("dificultad", dificultad);
    localStorage.setItem("tiendaPermitida", tiendaPermitida);
}