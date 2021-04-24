'user strict'
//Para localizar el botón la navegacion
var bar = document.querySelector("#line");

//Para localizar la clase iniciar del menu 
var menu = document.querySelector(".desaparece");

//Localizar la barra de busqueda
var buscar = document.querySelector("#searchLocation");

//Localizar el cuerpo de la pagina
var body = document.querySelector(".one");

// Variable de la etiqueta de navegación
var nav = document.querySelector("#nave");

//Esta función ser realizo  añadir clases a las etiquetas html y lograr que el menu funcione en toda la pagina y sea más interactivo
function cambio(event) {
    //Añade la clase menu al noton de navegación
    this.classList.toggle("menu");
    // Añade la clase boton al menu para hcaer que aparezca y desaparezca
    menu.classList.toggle("aparece");
    // Añade esta clase para cuando aparezca el menu el body no se pueda hacer scroll
    body.classList.toggle("two");
    //Para lograr cancerlar las clases añadidas cuando se vuelva a precionar el boton
    event.preventDefault();
};
bar.addEventListener("click", cambio, false);

//Funcion para lograr cambiar el color de navegacion al instate de hacer scroll
window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        //Cambiar estilos de la navegación
        nav.style.background = "#758EBF";
        nav.style.top = "0px";
        //Reemplazar clases de para poner estilos diferentes
        bar.classList.remove('bar');
        bar.classList.add('barOne');

        //Sustituimos las clases para lograr crear cambiar el diseño al momento del scroll
        buscar.classList.remove('search');
        buscar.classList.add('searchOne');

    } else if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        //Para ocultar el menu
        nav.style.top = "-100px";
        nav.style.boxShadow = "2px 3px 16px 1px rgba(0,0,0,0.62)";
    } else if (document.body.scrollTop === 0 || document.documentElement.scrollTop === 0) {

        //Cambiar estilos de la navegación        
        nav.style.background = "transparent";
        nav.style.top = "0px";
        nav.style.boxShadow = "none";

        //Reemplazar clases de para poder estilos diferentes
        bar.classList.remove('barOne')
        bar.classList.add('bar');

        //Reemplazar clases de para poner estilos diferentes
        buscar.classList.remove('searchOne');
        buscar.classList.add('search');
    }
})