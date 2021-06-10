var boton = document.getElementById("boton");
var input = document.getElementById("input");
var ul = document.querySelector("ul");

boton.addEventListener("click", function () {
    if (input.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
        var botonEliminar=document.createElement("button");
        botonEliminar.appendChild(document.createTextNode("Eliminar"));
        botonEliminar.onclick= Eliminar;
        li.appendChild(botonEliminar);
    } 
})
input.addEventListener("keypress",function(evento){
    if(evento.keyCode === 13){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
        var botonEliminar=document.createElement("button");
        botonEliminar.appendChild(document.createTextNode("Eliminar"));
        botonEliminar.onclick= Eliminar;
        li.appendChild(botonEliminar);
    }
})

function Eliminar (e){
    e.target.parentNode.remove();
}