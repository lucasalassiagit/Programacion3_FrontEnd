const email = document.getElementById("email");
const boton = document.getElementById("validarBtn");
const mensaje = document.getElementById("mensajeValidacion");

boton.addEventListener("click", () => {
  if (email.value.includes("@") && email.value != "") {
    mensaje.innerHTML = "El correo es valido";
  } else if (!email.value.includes("@")) {
    mensaje.innerHTML = "Error debe contener @";
  }
  if (email.value == "") {
    mensaje.innerHTML = "El campo no puede estar vacio";
  }
});
