"use strict";
const selectProvincias = document.getElementById("selectProvincias");
const selectLocalidades = document.getElementById("selectLocalidades");
const btnEnviar = document.getElementById("btnEnviar");

// Función asíncrona para obtener provincias
async function obtenerProvinciasArgentina() {
  try {
    const response = await fetch("https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre");
    
    if (!response.ok) {
      throw new Error("La respuesta de la API no fue exitosa");
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error al obtener provincias:", error);
    throw error;
  }
}

// Función para insertar provincias en el select
function insertarProvinciasAlSelect(provinciasData) {
  selectProvincias.innerHTML = '<option value="">Seleccione una provincia</option>';
  
  const provinciasArray = provinciasData.provincias || [];
  
  provinciasArray.forEach(provincia => {
    const option = document.createElement("option");
    option.value = provincia.id;
    option.textContent = provincia.nombre;
    selectProvincias.appendChild(option);
  });
}

// Función asíncrona para obtener localidades
async function obtenerLocalidadesPorProvincia(provinciaId) {
  try {
    const response = await fetch(
      `https://apis.datos.gob.ar/georef/api/localidades?provincia=${provinciaId}&campos=id,nombre&max=1000`
    );
    
    if (!response.ok) throw new Error("Error al obtener localidades");
    
    return await response.json();
  } catch (error) {
    console.error("Error al obtener localidades:", error);
    throw error;
  }
}

// Función para insertar localidades
function insertarLocalidadesAlSelect(localidadesData) {
  selectLocalidades.innerHTML = '<option value="">Seleccione una localidad</option>';
  
  const localidadesArray = localidadesData.localidades || [];
  
  localidadesArray.forEach(localidad => {
    const option = document.createElement("option");
    option.value = localidad.id;
    option.textContent = localidad.nombre;
    selectLocalidades.appendChild(option);
  });
}

// Cargar provincias al iniciar (usando async/await)
async function cargarProvinciasIniciales() {
  try {
    const provinciasData = await obtenerProvinciasArgentina();
    insertarProvinciasAlSelect(provinciasData);
  } catch (error) {
    selectProvincias.innerHTML = '<option value="">Error al cargar provincias</option>';
  }
}

// Manejador de evento change para provincia (async/await)
selectProvincias.addEventListener("change", async function(event) {
  const provinciaId = event.target.value;
  
  if (!provinciaId) {
    selectLocalidades.innerHTML = '<option value="">Seleccione una provincia primero</option>';
    selectLocalidades.disabled = true;
    return;
  }
  
  selectLocalidades.disabled = true;
  selectLocalidades.innerHTML = '<option value="">Cargando localidades...</option>';
  
  try {
    const localidadesData = await obtenerLocalidadesPorProvincia(provinciaId);
    insertarLocalidadesAlSelect(localidadesData);
  } catch (error) {
    selectLocalidades.innerHTML = '<option value="">Error al cargar localidades</option>';
  } finally {
    selectLocalidades.disabled = false;
  }
});

// Manejador del botón enviar
btnEnviar?.addEventListener("click", function() {
  if (!selectProvincias.value || !selectLocalidades.value) {
    alert("Por favor seleccione una provincia y una localidad");
    return;
  }
  
  const provinciaSeleccionada = selectProvincias.options[selectProvincias.selectedIndex].text;
  const localidadSeleccionada = selectLocalidades.options[selectLocalidades.selectedIndex].text;
  
  console.log({
    provincia: provinciaSeleccionada,
    localidad: localidadSeleccionada,
    idProvincia: selectProvincias.value,
    idLocalidad: selectLocalidades.value
  });
  
  // Aquí puedes agregar el código para enviar los datos al servidor
});

// Iniciar carga de provincias cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", cargarProvinciasIniciales);