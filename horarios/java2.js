var x =  3;
var aux = " ";
var p = "Esto se hace para permitir a los skins y a algunos códigos funcionen mejor con el sistema operativo en el que se ejecutan.";
for(var i = 0; i < x; i++){
aux += "<h2>" + i + "</h2><p>" + p  + "</p>"
}
document.getElementById("para").innerHTML = aux;