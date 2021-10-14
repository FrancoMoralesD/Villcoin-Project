var nombre = prompt("ingrese un nombre");

if (nombre == ""){
    window.location.reload();
} else {
    var fecha = new Date();
    var hora = fecha.getHours();

    if(hora > 0 && hora<12){
        document.getElementById("txt").innerHTML = "Good morning" + nombre;
    } else  if (hora > 12 && hora < 19){
        document.getElementById("txt").innerHTML = "Good evening" + nombre;
    } else if (hora > 19 && hora < 24) {
        document.getElementById("txt").innerHTML = "Good night" + nombre;
    }
}



function greenBackground(){

    document.getElementById("body").style.background = "#00e676";
}

function redBackground(){

    document.getElementById("body").style.background = "#f44336";
}

function yellowBackground(){

    document.getElementById("body").style.background = "#ffff00";
}

function blueBackground(){

    document.getElementById("body").style.background = "#2962ff";
}

