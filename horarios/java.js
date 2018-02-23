var aux = "<ul class=menu>";
var x = 10;
for (var i = 0; i < x; i++) {
	aux += "<li class=menu><a href=" + i + ".html target=_blanck>Prueva nª"+ i +"</li>" ;
}
aux += "</ul>";
document.getElementById("menu").innerHTML = aux;
var aux = "<ul class=hora>";
var x = 2;
var hora = ["Barcelona", "Ripoll"];
var dias =["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divenderes", "Disapte", "Diumenge"];
var h = ["15.30 a 20.00", "15.30 a 20.00", "9.00 a 13.30 i de 15.30 a 20.00", "15.30 a 20.00 ", "9.00 a 13.30 i de 15.30 a 20.00", "10 a 14"]; 

for (var i = 0; i < x; i++) {
	aux += hora[i] + "<br>";
	if (hora[i] == "Ripoll") {
	for (var e = 0; e < 6; e++){
		aux += dias[e] + "  ";
		aux += h[e] + "<br>";
	}
	}
	if (hora[i] == "Barcelona") {
		aux += "<iframe src=http://ajuntament.barcelona.cat/biblioteques/sites/default/files/horaris_v120.pdf></iframe>"
	}
	aux += "<br>"
}
aux += "</ul>";
document.getElementById("hora").innerHTML = aux;

document.getElementById("cajas").innerHTML = "Funciona bien";