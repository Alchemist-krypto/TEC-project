var carga = document.getElementById("cargar");
var content = document.querySelector(".one");
var contentOne = document.querySelector(".c");
carga.style.display = "block";
window.addEventListener('load', function() {
    setTimeout(function() {
        carga.style.display = "none";
        content.classList.toggle("tree");
        contentOne.classList.toggle("tree");
    }, 1500)

})