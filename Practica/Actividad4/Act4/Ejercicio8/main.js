let mensaje = "Hola Mundo";

const boton = document.getElementById("esperar");
const mostrarMensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
  setTimeout(() => {
    mostrarMensaje.innerHTML = mensaje;
  }, 3000);
});
