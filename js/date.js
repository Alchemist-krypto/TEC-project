'use strict'
//Se llama al objeto Date que nos proporcionará la fecha del año actual
var date = new Date();
//Nos proporciona el año actual
var year = date.getFullYear();
//Inserta en el HTML el año correspondiente
document.getElementById("date").innerHTML = year;
