const btnEstilo = document.getElementById("btn-estilo");
btnEstilo.addEventListener("click", function() {
  var body = document.getElementsByTagName("body")[0];
  body.classList.toggle("dark-theme");
  //btnEstilo.querySelector("img").setAttribute("src", "lightbulb-on.svg")
  // intento de cambiar tambien el boton
});
