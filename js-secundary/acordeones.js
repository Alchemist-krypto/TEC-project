var btn = document.getElementsByClassName("boton");

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
        this.classList.toggle("activo");
        var ifm = this.nextElementSibling;
        ifm.classList.toggle("ing");
    })
}