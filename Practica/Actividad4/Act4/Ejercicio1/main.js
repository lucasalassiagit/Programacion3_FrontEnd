const incrementar = document.getElementById("incrementar");
const disminuir = document.getElementById("disminuir");
const reiniciar = document.getElementById("reiniciar");
const contador = document.getElementById("contador");
let variable = 0;

incrementar.addEventListener("click", () => {
  variable += 1;
  contador.innerHTML = variable;
});

disminuir.addEventListener("click", () => {
  variable -= 1;
  contador.innerHTML = variable;
});

reiniciar.addEventListener("click", () => {
  variable = 0;
  contador.innerHTML = variable;
});
