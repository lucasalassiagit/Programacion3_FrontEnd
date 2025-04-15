const nombre = document.getElementById("nombre");
const boton = document.getElementById("mostrarNombre");
const mostrar = document.getElementById("saludo");

boton.addEventListener("click", () => {
  mostrar.innerHTML += nombre.value;
});
