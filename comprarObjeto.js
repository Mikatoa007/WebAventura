objetoComprado = "";
function comprarObjeto1(){
    objetoComprado = document.getElementById("objeto1").innerHTML;
    objetoInv1=localStorage.getItem("objeto1");
    objetoInv2=localStorage.getItem("objeto2");
    objetoInv3=localStorage.getItem("objeto3");
    objetoInv4=localStorage.getItem("objeto4");
    if (objetoComprado == "Ninguno") {
        alert("No hay nada que comprar aquí.");
    }
    if (objetoInv1 == "Ninguno"||objetoInv2 == "Ninguno"||objetoInv3 == "Ninguno"||objetoInv4 == "Ninguno") {
        if (objetoComprado != "Ninguno") {
            comprarObj();
            document.getElementById("objeto1").innerHTML = "Ninguno";
            localStorage.setItem("objetoTienda1", "Ninguno");
        }
    } else {
        alert("No te queda espacio en el inventario.");
    }
}
function comprarObjeto2(){
    objetoComprado = document.getElementById("objeto2").innerHTML;
    objetoInv1=localStorage.getItem("objeto1");
    objetoInv2=localStorage.getItem("objeto2");
    objetoInv3=localStorage.getItem("objeto3");
    objetoInv4=localStorage.getItem("objeto4");
    if (objetoComprado == "Ninguno") {
        alert("No hay nada que comprar aquí.");
    }
    if (objetoInv1 == "Ninguno"||objetoInv2 == "Ninguno"||objetoInv3 == "Ninguno"||objetoInv4 == "Ninguno") {
        if (objetoComprado != "Ninguno") {
            comprarObj();
            document.getElementById("objeto2").innerHTML = "Ninguno";
            localStorage.setItem("objetoTienda2", "Ninguno");
        }
    } else {
        alert("No te queda espacio en el inventario.");
    }
}
function comprarObjeto3(){
    objetoComprado = document.getElementById("objeto3").innerHTML;
    objetoInv1=localStorage.getItem("objeto1");
    objetoInv2=localStorage.getItem("objeto2");
    objetoInv3=localStorage.getItem("objeto3");
    objetoInv4=localStorage.getItem("objeto4");
    if (objetoComprado == "Ninguno") {
        alert("No hay nada que comprar aquí.");
    }
    if (objetoInv1 == "Ninguno"||objetoInv2 == "Ninguno"||objetoInv3 == "Ninguno"||objetoInv4 == "Ninguno") {
        if (objetoComprado != "Ninguno") {
            comprarObj();
            document.getElementById("objeto3").innerHTML = "Ninguno";
            localStorage.setItem("objetoTienda3", "Ninguno");
        }
    } else {
        alert("No te queda espacio en el inventario.");
    }
}
function comprarObj(){
    objetoInv1=localStorage.getItem("objeto1");
    objetoInv2=localStorage.getItem("objeto2");
    objetoInv3=localStorage.getItem("objeto3");
    objetoInv4=localStorage.getItem("objeto4");
    if (objetoInv1=="Ninguno") {
        localStorage.setItem("objeto1", objetoComprado);
    } else if (objetoInv2=="Ninguno") {
        localStorage.setItem("objeto2", objetoComprado);
    } else if (objetoInv3=="Ninguno") {
        localStorage.setItem("objeto3", objetoComprado);
    } else if (objetoInv4=="Ninguno") {
        localStorage.setItem("objeto4", objetoComprado);
    } else {
        alert("No te queda espacio en el inventario.");
    }
}