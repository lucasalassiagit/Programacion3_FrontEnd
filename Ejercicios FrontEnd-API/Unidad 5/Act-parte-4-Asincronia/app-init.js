"use strict";
const selectProvincias = document.getElementById("selectProvincias");
const selectLocalidades = document.getElementById("selectLocalidades");
const btnEnviar = document.getElementById("btnEnviar");

function obtenerProvinciasArgentina() {
  // Obtener el listado de provincias de la api: https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre
  return fetch(
    "https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("La respuesta de la API no fue exitosa");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Hubo un problema con la operacion fetch: ", error);
    });
}

function insertarProvinciasAlSelect(provinciasArray) {
  // Recorrer array de provincias y insertar opciones en el <select>
  provinciasArray.forEach((provincia) => {
    const option = document.createElement("option");
    option.value = provincia.id;
    option.textContent = provincia.nombre;
    selectProvincias.appendChild(option);
  });
}

insertarProvinciasAlSelect(obtenerProvinciasArgentina);

selectProvincias.addEventListener("change", async function (event) {
  /* 
        El evento change se dispará cada vez que se seleccione un valor en el elemento select.
        Disponemos del objeto "event", el cual representa el evento que el usuario acaba de hacer.
        Accedemos al target (el elemento que disparó el evento, en este caso el <select>) y obtenemos su value.
    */
  console.log(event.target.value);
});

// Continuar...
