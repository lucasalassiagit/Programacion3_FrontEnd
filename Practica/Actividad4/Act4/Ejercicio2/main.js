const parrafo = document.getElementById("parrafo");
const boton = document.getElementById("boton");

const mensaje = "Esto es un mensaje de personalizado";

boton.addEventListener("click", () => {
  parrafo.innerText = mensaje;
});
