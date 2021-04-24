var mas = document.getElementById("vermas1");
var menos = document.getElementById("vermenos2");
var cajas = document.getElementsByClassName("box");


mas.onclick = function() {
    for (var i = 0; i < cajas.length; i++) {
        cajas[i].style.display = "block";
        mas.style.display = "none";
        menos.style.display = "block";
    }
}
menos.onclick = function() {
    for (var i = 0; i < cajas.length; i++) {
        cajas[i].style.display = "none";
        mas.style.display = "block";
        menos.style.display = "none";
    }
}