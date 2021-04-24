var btn = document.getElementsByClassName("boton");
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
        this.classList.toggle("activo");
        var ifm = this.nextElementSibling;
        ifm.classList.toggle("ing");
    })
}

var ceBTN = document.getElementsByClassName("cerraNtn");
var crr = document.getElementsByClassName("info");

for (var x = 0; x < ceBTN.length; x++) {
    ceBTN[x].addEventListener("click", function() {
        for (var z = 0; z < crr.length; z++) {
            crr[z].classList.remove("ing");
        }
    })
}