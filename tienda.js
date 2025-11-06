const valores = ['Manzana', 'Guantes', 'Pala','Normal4','Normal5','Normal6','Normal7','Normal8','Normal9','Normal10'];
const valoresRaros = ['Raro1', 'Raro2', 'Raro3', 'Raro4', 'Raro5'];

let objetoTienda1 = localStorage.getItem("objetoTienda1");
let objetoTienda2 = localStorage.getItem("objetoTienda2");
let objetoTienda3 = localStorage.getItem("objetoTienda3");

const elegirLista1 = Math.floor(Math.random() * 100)+1;
const elegirLista2 = Math.floor(Math.random() * 100)+1;
const elegirLista3 = Math.floor(Math.random() * 100)+1;
function listaElegidaObjeto1() {
    if (elegirLista1 > 20) {
        const posicion = Math.floor(Math.random() * valores.length);
        const valor = valores[posicion];
        console.log(valor);
        document.getElementById("objeto1").innerHTML = valor;
        localStorage.setItem("objetoTienda1", valor);
    } else {
        const posicion = Math.floor(Math.random() * valoresRaros.length);
        const valor = valoresRaros[posicion];
        console.log(valor);
        document.getElementById("objeto1").innerHTML = valor;
        localStorage.setItem("objetoTienda1", valor);
    }
}
function listaElegidaObjeto2() {
    if (elegirLista2 > 20) {
        const posicion = Math.floor(Math.random() * valores.length);
        const valor = valores[posicion];
        console.log(valor);
        document.getElementById("objeto2").innerHTML = valor;
        localStorage.setItem("objetoTienda2", valor);
    } else {
        const posicion = Math.floor(Math.random() * valoresRaros.length);
        const valor = valoresRaros[posicion];
        console.log(valor);
        document.getElementById("objeto2").innerHTML = valor;
        localStorage.setItem("objetoTienda2", valor);
    }
}
function listaElegidaObjeto3() {
    if (elegirLista3 > 20) {
        const posicion = Math.floor(Math.random() * valores.length);
        const valor = valores[posicion];
        console.log(valor);
        document.getElementById("objeto3").innerHTML = valor;
        localStorage.setItem("objetoTienda3", valor);
    } else {
        const posicion = Math.floor(Math.random() * valoresRaros.length);
        const valor = valoresRaros[posicion];
        console.log(valor);
        document.getElementById("objeto3").innerHTML = valor;
        localStorage.setItem("objetoTienda3", valor);
    }
}
onload = function() {
    tiendaPermitida = localStorage.getItem("tiendaPermitida");
    document.getElementById("objeto1").innerHTML = objetoTienda1;
    document.getElementById("objeto2").innerHTML = objetoTienda2;
    document.getElementById("objeto3").innerHTML = objetoTienda3;
    if (tiendaPermitida == 1) {
        listaElegidaObjeto1();
        listaElegidaObjeto2();
        listaElegidaObjeto3();
        console.log(tiendaPermitida);
        localStorage.setItem("tiendaPermitida", 0);
    }
    document.getElementById("monedas").innerHTML = localStorage.getItem("monedas");
}