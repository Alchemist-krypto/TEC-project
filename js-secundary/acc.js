'use strict'
//En la variable acordeon se guardan todos los elementos que tengan de atributo a la clase "acordeon"
var acordeon = document.getElementsByClassName("acordeon");
//En la variable panel se guardan todos los elementos que tengan de atributo a la clase "info-panel" que se encarga de mostrar la información oculta de las cajas
var panel = document.getElementsByClassName("info-panel");
//Se recorren todos los elementos y a la vez vigila en cual se realiza la acción de click
for (let i = 0; i < acordeon.length; i++) {
    acordeon[i].addEventListener("click", function(e) {
        //Guarda en una variable al objeto que se presionó
        let objetivo = e.target;
        //Se encarga de revisar al elemento hijo del elemento seleccionado anteriormente
        let info = objetivo.nextElementSibling;
        if (objetivo) {
            //El For se encarga de revisar a todos los que contienen información por desplegar
            for (let a = 0; a < panel.length; a++) {
                //Aquí se cierran todos los elementos que contienen información
                panel[a].style.maxHeight = null;
            }
            //Aquí solo se despliega el elemento seleccionado
            info.style.maxHeight = info.scrollHeight + "px";
        }

    });
}