onload = function() {
    var nivel = localStorage.getItem("nivel");
    var dificultad = localStorage.getItem("dificultad");
    if (nivel == null || dificultad == null) {
        document.getElementById("mundoT").innerHTML = "Si estás leyendo esto, ha ocurrido un error";
        document.getElementById("juego").innerHTML = "<a href=\"index.html\">Volver al inicio</a>";
    } else
    if (nivel < 15) {
        document.getElementById("mundoT").innerHTML = "Estás en: un bosque";
    }else
    if (nivel < 30) {
        document.getElementById("mundoT").innerHTML = "Estás en: una montaña";
    }else
    if (nivel < 45) {
        document.getElementById("mundoT").innerHTML = "Estás en: el Infierno";
    }else
    if (nivel >= 45) {
        document.getElementById("mundoT").innerHTML = "Tramposo";
    }
}
function explorar() {
    document.getElementById("explorar").setAttribute("disabled", "disabled");
    var nivel = parseFloat(localStorage.getItem("nivel"));
    localStorage.setItem("tiendaPermitida", 1);
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
        escribirAnimado(document.getElementById("mundoT"), "el Infierno");
    } else if (nivel >= 45) {
        window.location.href = "victoria.html";
    }
}
function escribirAnimado(elemento, texto) {
    let i = elemento.innerHTML.length;
    const timerB = setInterval(function() {
        if (i >= "Estás en: ".length) {
            elemento.innerHTML = elemento.innerHTML.substring(0, i);
            i--;
        } else {
            clearInterval(timerB);
            i = 0;
            const timer = setInterval(function() {
                if (i < texto.length) {
                    elemento.innerHTML += texto.charAt(i);
                    i++;
                } else {
                    clearInterval(timer);
                    document.getElementById("explorar").removeAttribute("disabled");
                }
            }, 50);    }
    }, 40);
}