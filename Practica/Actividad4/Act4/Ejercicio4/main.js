const boton = document.getElementById("boton");
let confirmacion = false;

boton.addEventListener("click", () => {
  confirmacion = window.confirm("¿Quieres salir de la página?");
  if (confirmacion) {
    window.open("https://www.google.com");
  }
});
