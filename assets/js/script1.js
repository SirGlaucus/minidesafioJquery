$(document).ready(function(){ // Se activa al cargarse el documento
    $("#falseButton").click(function(){ // Llamamos a la fusion click en nuestro falso boton y luego comenzamos a cambiar las propiedades css
        $("#changeColor").css("background", "green");
        $("#changeColor").css("color", "white");
        $("#changeColor").css("border", "10px solid blue");
        $("#changeColor").css("width", "2500px");
    });
})