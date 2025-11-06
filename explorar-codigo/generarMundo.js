let estado = 0;
let enemigoC = 0;
let situacion = localStorage.getItem("situacion");
function inicioGenMundo() {
    var nivel = localStorage.getItem("nivel");
    var dificultad = localStorage.getItem("dificultad");
    if (nivel == null || dificultad == null) {
        document.getElementById("mundoT").innerHTML = "Si estás leyendo esto, ha ocurrido un error";
        document.getElementById("juego").innerHTML = "<a href=\"index.html\">Volver al inicio</a>";
    } else
        if (nivel < 15) {
            document.getElementById("mundoT").innerHTML = "Estás en: un bosque";
        } else
            if (nivel < 30) {
                document.getElementById("mundoT").innerHTML = "Estás en: una montaña";
            } else
                if (nivel < 45) {
                    document.getElementById("mundoT").innerHTML = "Estás en: el Infierno";
                } else
                    if (nivel >= 45) {
                        document.getElementById("mundoT").innerHTML = "Tramposo";
                    }
    enemigoC = localStorage.getItem("enemigo")
    if (enemigoC == 1 || enemigoC == 2 || enemigoC == 3 || enemigoC == 4 || enemigoC == 5) {
        document.getElementById("explorar").setAttribute("disabled", "disabled");
        combate();
    }
    if (situacion == "muro") {
        muro();
    }
}
addEventListener("load", inicioGenMundo);
function explorar() {
    estado = Math.floor(Math.random() * 100) + 1;
    document.getElementById("explorar").setAttribute("disabled", "disabled");
    var nivel = parseFloat(localStorage.getItem("nivel"));
    localStorage.setItem("tiendaPermitida", 1);
    localStorage.setItem("situacion", null);
    if (nivel < 15) {
        nivel = nivel + 1;
        localStorage.setItem("nivel", nivel);
        escribirAnimado(document.getElementById("mundoT"), "un bosque");
    } else if (nivel < 30) {
        nivel = nivel + 1;
        localStorage.setItem("nivel", nivel);
        escribirAnimado(document.getElementById("mundoT"), "una montaña");
    } else if (nivel < 45) {
        nivel = nivel + 1;
        localStorage.setItem("nivel", nivel);
        quemaduras();
        escribirAnimado(document.getElementById("mundoT"), "el Infierno");
    } else if (nivel >= 45) {
        window.location.href = "victoria.html";
    }
}
function quemaduras() {
    var nivel = parseFloat(localStorage.getItem("nivel"));
    danoQuemado = Math.floor(Math.random() * nivel) + 1 - 20;
    if (danoQuemado < 0) {
        danoQuemado = 0;
    } else {
        alert("A causa del calor te has quemado, perdiste " + danoQuemado + " puntos de vida.");
        vidaActual = localStorage.getItem("vida")  - danoQuemado;
        document.getElementById("vidaJUGADOR").innerHTML = vidaActual;
        if (vidaActual <= 0) {
            window.location.href = "muerte.html";
        }
    }
}
function escribirAnimado(elemento, texto) {
    let i = elemento.innerHTML.length;
    const timerB = setInterval(function () {
        if (i >= "Estás en: ".length) {
            elemento.innerHTML = elemento.innerHTML.substring(0, i);
            i--;
        } else {
            clearInterval(timerB);
            i = 0;
            const timer = setInterval(function () {
                if (i < texto.length) {
                    elemento.innerHTML += texto.charAt(i);
                    i++;
                } else {
                    clearInterval(timer);
                    if (estado < 10) {
                        document.getElementById("explorar").removeAttribute("disabled");
                        document.getElementById("situacion").innerHTML = "Ahora mismo no está pasando nada.";
                    } else if (estado >= 10 && estado < 20) {
                        muro();
                    } else if (estado >= 20 && estado < 30) {
                        enemigoF();
                    } else if (estado >= 30 && estado < 40) {
                        enemigoF();
                    } else if (estado >= 40 && estado < 50) {
                        enemigoN();
                    } else if (estado >= 50 && estado < 60) {
                        enemigoD();
                    } else if (estado >= 60 && estado < 70) {
                        muro();
                    } else if (estado >= 70 && estado < 80) {
                        muro();
                    } else if (estado >= 80 && estado < 90) {
                        muro();
                    } else if (estado >= 90 && estado < 100) {
                        muro();
                    }

                }
            }, 50);
        }
    }, 40);
}
function muro() {
    document.getElementById("situacion").innerHTML = "Te has encontrado con un muro.";
    document.getElementById("explorar").removeAttribute("disabled");
    opciones = document.createElement("div");
    opciones.className = "opcionesM";
    opciones.ID = "opcionesM";
    opciones.innerHTML = "<button id=\"descansar\" onclick=\"descansar()\">Descansar a un lado del muro</button>";
    localStorage.setItem("situacion", "muro");
    document.getElementById("situacion").appendChild(opciones);
}
function enemigoF() {
    enemigoC = Math.floor(Math.random() * 3) + 1;
    if (enemigoC == 1) {
        document.getElementById("situacion").innerHTML = "Te has encontrado con un slime.";
        enemigoC = 1;
        combate();
    } else if (enemigoC == 2) {
        document.getElementById("situacion").innerHTML = "Te has encontrado con un zombi.";
        enemigoC = 2;
        combate();
    } else if (enemigoC == 3) {
        document.getElementById("situacion").innerHTML = "Te has encontrado con un esqueleto.";
        enemigoC = 3;
        combate();
    }
    
}
function enemigoN() {
    document.getElementById("situacion").innerHTML = "Te has encontrado con un soldado.";
    enemigoC = 4;
    combate();
}
function enemigoD() {
    document.getElementById("situacion").innerHTML = "Te has encontrado con un orco.";
    enemigoC = 5;
    combate();
}
function descansar() {
    evento = Math.floor(Math.random() * 100) + 1;
    if (evento <= 10) {
        alert("Mientras descansabas, una piedra del muro cayó sobre ti.");
        localStorage.setItem("vida", parseFloat(localStorage.getItem("vida")) - 5);
        document.getElementById("vidaJUGADOR").innerHTML = localStorage.getItem("vida");
    } else if (evento > 10) {
        alert("Has descansado y recuperas 10 puntos de vida.");
        localStorage.setItem("vida", parseFloat(localStorage.getItem("vida")) + 10);
        document.getElementById("vidaJUGADOR").innerHTML = localStorage.getItem("vida");
    }
    document.getElementById("descansar").remove();
    document.getElementById("situacion").innerHTML = "Ahora mismo no está pasando nada.";
    localStorage.setItem("situacion", 0);
}
function combate() {
    enemigoC = localStorage.setItem("enemigo", enemigoC);
    enemigoC = localStorage.getItem("enemigo");
    eneNombre = "ninguno";
    if (enemigoC == "1") {
        eneNombre = "Slime";
        document.getElementById("situacion").innerHTML = "Te has encontrado con un slime.";
        localStorage.getItem("enemigoV");
        if (localStorage.getItem("enemigoV") == "0"|| localStorage.getItem("enemigoV") == undefined ||localStorage.getItem("enemigoV") == 0)
        {
            localStorage.setItem("enemigoV", 5);
        }else{
            localStorage.setItem("enemigoV", parseFloat(localStorage.getItem("enemigoV")));
        }
        localStorage.setItem("enemigoD", 3);

    } else if (enemigoC == "2") {
        eneNombre = "Zombi";
        document.getElementById("situacion").innerHTML = "Te has encontrado con un zombi.";
        localStorage.getItem("enemigoV");
        if (localStorage.getItem("enemigoV") == "0"|| localStorage.getItem("enemigoV") == undefined ||localStorage.getItem("enemigoV") == 0) {
            localStorage.setItem("enemigoV", 15);
        }else{
            localStorage.setItem("enemigoV", parseFloat(localStorage.getItem("enemigoV")));
        }
        localStorage.setItem("enemigoD", 1);
    } else if (enemigoC == "3") {
        eneNombre = "Esqueleto";
        document.getElementById("situacion").innerHTML = "Te has encontrado con un esqueleto.";
        localStorage.getItem("enemigoV");
        if (localStorage.getItem("enemigoV") == "0"|| localStorage.getItem("enemigoV") == undefined ||localStorage.getItem("enemigoV") == 0) {
            localStorage.setItem("enemigoV", 10);
        }else{
            localStorage.setItem("enemigoV", parseFloat(localStorage.getItem("enemigoV")));
        }
        localStorage.setItem("enemigoD", 2);
    } else if (enemigoC == "4") {
        eneNombre = "Soldado";
        document.getElementById("situacion").innerHTML = "Te has encontrado con un soldado.";
        localStorage.getItem("enemigoV");
        if(localStorage.getItem("enemigoV") == "0"|| localStorage.getItem("enemigoV") == undefined ||localStorage.getItem("enemigoV") == 0){
            localStorage.setItem("enemigoV", 20);
        } else {
            localStorage.setItem("enemigoV", parseFloat(localStorage.getItem("enemigoV")));
        }
        localStorage.setItem("enemigoD", 6);
    } else if (enemigoC == "5") {
        eneNombre = "Orco";
        document.getElementById("situacion").innerHTML = "Te has encontrado con un orco.";
        localStorage.getItem("enemigoV");
        if(localStorage.getItem("enemigoV") == "0"|| localStorage.getItem("enemigoV") == undefined ||localStorage.getItem("enemigoV") == 0){
            localStorage.setItem("enemigoV", 30);
        } else {
            localStorage.setItem("enemigoV", parseFloat(localStorage.getItem("enemigoV")));
        }
        localStorage.setItem("enemigoD", 6);
    }
    eneVida = localStorage.getItem("enemigoV");
    eneDano = localStorage.getItem("enemigoD");
    interfazCombate = document.createElement("interComba");
    interfazCombate.setAttribute("id", "interComba");
    document.getElementById("juego").appendChild(interfazCombate);
    document.getElementById("interComba").innerHTML = "<h1 id=\"nombreEnemigo\">" + eneNombre + "</h1>" + "\n" + "<div> Vida del enemigo: <p id=\"vidaEnemigo\">"+eneVida+"</p></div>" + "<div id=\"danoEnemigo\">Daño del enemigo: "+eneDano+"</div>" + "<div id=\"accionesJug\"><button id=\"atacar\"onclick=\"atacarJug()\">Atacar</button><button id=\"escapar\"onclick=\"escaparJug()\">Escapar</button><button id=\"objetoUso\"onclick=\"objetoJug()\">Usar objeto</button></div>";
}