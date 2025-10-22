
function claseInit() {
    let clase = localStorage.getItem("clase");
    if (clase == null) {
        document.getElementById("clase").innerHTML = "Ninguna";
        localStorage.setItem("clase", "Ninguna");
    } else {
        document.getElementById("clase").innerHTML = localStorage.getItem("clase");
        document.getElementById("vida").innerHTML = localStorage.getItem("vida");
        document.getElementById("objetosMax").innerHTML = localStorage.getItem("objetosMax");
    }
};
addEventListener("load", claseInit);
function elegirClase() {
    var clase = document.getElementById("clase").innerHTML;
    if (clase == "Ninguna") {
        document.getElementById("clase").innerHTML = "Guerrero";
        localStorage.setItem("clase", "Guerrero");
        document.getElementById("vida").innerHTML = 30;
        localStorage.setItem("vida", 30);
        document.getElementById("objetosMax").innerHTML = 3;
        localStorage.setItem("objetosMax", 3);
        localStorage.setItem("objeto1", "Ninguno");
        localStorage.setItem("objeto2", "Ninguno");
        localStorage.setItem("objeto3", "Ninguno");
        localStorage.removeItem("objeto4");
    } else if (clase == "Guerrero") {
        document.getElementById("clase").innerHTML = "Mago";
        localStorage.setItem("clase", "Mago");
        document.getElementById("vida").innerHTML = 15;
        localStorage.setItem("vida", 15);
        document.getElementById("objetosMax").innerHTML = 2;
        localStorage.setItem("objetosMax", 2);
        localStorage.setItem("objeto1", "Ninguno");
        localStorage.setItem("objeto2", "Ninguno");
        localStorage.removeItem("objeto3");
        localStorage.removeItem("objeto4");
    } else if (clase == "Mago") {
        document.getElementById("clase").innerHTML = "Explorador";
        localStorage.setItem("clase", "Explorador");
        document.getElementById("vida").innerHTML = 25;
        localStorage.setItem("vida", 25);
        document.getElementById("objetosMax").innerHTML = 4;
        localStorage.setItem("objetosMax", 4);
        localStorage.setItem("objeto1", "Ninguno");
        localStorage.setItem("objeto2", "Ninguno");
        localStorage.setItem("objeto3", "Ninguno");
        localStorage.setItem("objeto4", "Ninguno");
    } else if (clase == "Explorador") {
        document.getElementById("clase").innerHTML = "Guerrero";
        localStorage.setItem("clase", "Guerrero");
        document.getElementById("vida").innerHTML = 30;
        localStorage.setItem("vida", 30);
        document.getElementById("objetosMax").innerHTML = 3;
        localStorage.setItem("objetosMax", 3);
        localStorage.setItem("objeto1", "Ninguno");
        localStorage.setItem("objeto2", "Ninguno");
        localStorage.setItem("objeto3", "Ninguno");
        localStorage.removeItem("objeto4");
    }
    
}