const nuevaTarea = document.getElementById("tareaInput");
const boton = document.getElementById("agregarTareaBtn");
let lista = document.getElementById("listaTareas");

boton.addEventListener("click", () => {
  lista.innerHTML += nuevaTarea.value + "<br>";
});
