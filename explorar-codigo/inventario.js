function inventario() {
    claseAct=localStorage.getItem("clase");
    if (claseAct=="Guerrero") {
        objeto3=document.createElement("div");
        objeto3.className="apartadoObjsInv";
        objeto3.innerHTML="<p>Objeto 3:</p> <div class=\"objsInv\" id=\"objInv3\">nada</div>";
        invObjs=document.getElementById("inventarioObjs")
        invObjs.appendChild(objeto3);
    }else if (claseAct=="Explorador") {
        objeto3=document.createElement("div");
        objeto3.className="apartadoObjsInv";
        objeto3.innerHTML="<p>Objeto 3:</p> <div class=\"objsInv\" id=\"objInv3\">nada</div>";
        invObjs=document.getElementById("inventarioObjs")
        invObjs.appendChild(objeto3);
        objeto4=document.createElement("div");
        objeto4.className="apartadoObjsInv";
        objeto4.innerHTML="<p>Objeto 4:</p> <div class=\"objsInv\" id=\"objInv4\">nada</div>";
        invObjs=document.getElementById("inventarioObjs")
        invObjs.appendChild(objeto4);
    }
    obj1=localStorage.getItem("objeto1");
    obj2=localStorage.getItem("objeto2");
    document.getElementById("objInv1").innerHTML=obj1;
    document.getElementById("objInv2").innerHTML=obj2;
    if (claseAct=="Guerrero") {
        obj3=localStorage.getItem("objeto3");
        document.getElementById("objInv3").innerHTML=obj3;
    }
    if (claseAct=="Explorador") {
        obj3=localStorage.getItem("objeto3");
        obj4=localStorage.getItem("objeto4");
        document.getElementById("objInv3").innerHTML=obj3;
        document.getElementById("objInv4").innerHTML=obj4;
    }
    monedas=localStorage.getItem("monedas");
    monCant=document.createElement("div");
    monCant.className="apartadoObjsInv";
    monCant.innerHTML="<p>Monedas:</p> <div class=\"objsInv\" id=\"monInv\">"+monedas+"</div>";
    invObjs=document.getElementById("inventarioObjs")
    invObjs.appendChild(monCant);
    document.getElementById("inventarioObjs").style.visibility="hidden";
}
function mirarInventario() {
    invVis=document.getElementById("inventarioObjs").style.visibility;
    if (invVis=="visible") {
        invVis=document.getElementById("inventarioObjs").style.visibility="hidden";
    } else if (invVis=="hidden") {
        invVis=document.getElementById("inventarioObjs").style.visibility="visible";
    }
}
addEventListener("load", inventario);