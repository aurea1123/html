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


var z = " ";
var x = 2;
var tit = ["Documentacion General ", "Documentacion de javascript"];
var url2 = ["http://w3schools.com/", "http://www.manualdejavascript.com/section/manualdejavascript/"];
for(var i = 0; i < x ;i++){
	z += "<h2><p>" + tit[i] + "</p></h2>";
	z += "<a href=" + url2[i] + "><iframe src=" + url2[i] + "></iframe></a>";
	z += "<a href=" + url2[i] + "><p>Link</p></a>";
}

var q = " ";
var x = 1;
for(var i = 0; i < x; i++){
q += "<br>hola";
for(var e = 0; e < x; e++){
q += "<div id=blo></div>";
}
}

document.getElementById("url").innerHTML = z;
document.getElementById("cajas").innerHTML = q;
document.getElementById("hora").innerHTML = aux;

