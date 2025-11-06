jugadorVida = localStorage.getItem("vida");
jugadorClas = localStorage.getItem("clase");
jugadorAtq = localStorage.getItem("ataque");
function statJuga() {
    document.getElementById("vidaJUGADOR").innerHTML = jugadorVida;
    document.getElementById("ataqueJUGADOR").innerHTML = jugadorAtq;
}
addEventListener("load", statJuga);
function atacarJug(){
    enemigoVida = localStorage.getItem("enemigoV");
    enemigoDano = localStorage.getItem("enemigoD");
    jugDanAct = Math.floor(Math.random() * jugadorAtq) + 1;
    enemigoVidaAct = enemigoVida - jugDanAct;
    localStorage.setItem("enemigoV", enemigoVidaAct);
    document.getElementById("vidaEnemigo").innerHTML = enemigoVidaAct;
    enemigoDanAct = Math.floor(Math.random() * enemigoDano) + 1;
    jugadorVida = jugadorVida - enemigoDanAct;
    document.getElementById("vidaJUGADOR").innerHTML = jugadorVida;
    localStorage.setItem("vida", jugadorVida);
    if (jugadorVida <= 0) {
        window.location.href = "muerte.html";
        localStorage.clear();
    }
    if (enemigoVidaAct <= 0) {
        document.getElementById("explorar").removeAttribute("disabled");
        alert("Has derrotado al enemigo");
        document.getElementById("interComba").remove();
        localStorage.setItem("enemigo", "0");
        localStorage.setItem("enemigoV", "0");
        localStorage.setItem("enemigoD", "0");
        subirNivel();
    }
}
function escaparJug(){
    escapar=0
    if(jugadorClas=="Guerrero"){
        escapar = Math.floor(Math.random() * 8) + 1;
    } else if (jugadorClas=="Mago") {
        escapar = Math.floor(Math.random() * 2) + 1;
    } else if (jugadorClas=="Explorador") {
        escapar = Math.floor(Math.random() * 6) + 1;
    }
    if (escapar == 1) {
        document.getElementById("explorar").removeAttribute("disabled");
        alert("Has escapado del enemigo");
        document.getElementById("interComba").remove();
        localStorage.setItem("enemigo", "0");
        localStorage.setItem("enemigoV", "0");
        localStorage.setItem("enemigoD", "0");
        document.getElementById("situacion").innerHTML = "Ahora mismo no está pasando nada.";
        if (jugadorClas == "Mago") {
            localStorage.setItem("ataque", parseFloat(localStorage.getItem("ataque")) + 1);
            document.getElementById("ataqueJUGADOR").innerHTML = localStorage.getItem("ataque");
            alert("Al escapar como mago ganado 1 puntos de ataque");
        }
    } else{
        enemigoDano = localStorage.getItem("enemigoD");
        jugadorVida = localStorage.getItem("vida");
        enemigoDanAct = Math.floor(Math.random() * enemigoDano) + 3;
        jugadorVidaAct = jugadorVida - enemigoDanAct;
        localStorage.setItem("vida", jugadorVidaAct);
        document.getElementById("vidaJUGADOR").innerHTML = jugadorVidaAct;
        alert("No has escapado, Has sido atacado por el enemigo");
        if (jugadorVidaAct <= 0) {
            window.location.href = "muerte.html";
            localStorage.clear();
        }
    }
}
function subirNivel(){
    nivel = document.createElement("div");
    nivel.setAttribute("id", "nivelSubir");
    nivel.innerHTML = "<h2>¿Qué quieres aumentar?</h2> <button onclick=\"aumentarVida()\">Vida</button> <button onclick=\"aumentarAtaque()\">Daño</button>";
    document.body.appendChild(nivel);
}
function aumentarVida() {
    jugadorVida = parseFloat(localStorage.getItem("vida"));
    jugadorVida = jugadorVida + 10;
    localStorage.setItem("vida", jugadorVida);
    document.getElementById("vidaJUGADOR").innerHTML = jugadorVida;
    document.getElementById("nivelSubir").remove();
}
function aumentarAtaque(){
    jugadorAtq = parseFloat(localStorage.getItem("ataque"));
    jugadorAtq = jugadorAtq + 2;
    localStorage.setItem("ataque", jugadorAtq);
    document.getElementById("ataqueJUGADOR").innerHTML = jugadorAtq;
    document.getElementById("nivelSubir").remove();
}