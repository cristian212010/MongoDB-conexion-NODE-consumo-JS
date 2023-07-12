import {
  allEmpleados,
  addEmpleado,
  deleteEmpleado,
  selectOne,
  updateEmpleado,
} from "./API.js";

document.addEventListener("DOMContentLoaded", () => {
  loadEmpleados();
});

//Read
async function loadEmpleados() {
  const empleados = await allEmpleados();
  const contenedor = document.querySelector("main");
  empleados.forEach((empleado) => {
    contenedor.innerHTML += `
        <div class="card">
        <div class="content">
            <div class="back">
            <div class="back-content">
                <strong>${empleado.Nombre} ${empleado.Apellido}</strong>
                <p class="title">
                <strong>${empleado.Titulo} ${empleado.TituloCortesia}</strong>
                </p>
            </div>
            </div>
            <div class="front">
            
            <div class="img">
                <p class="title">
                <strong>${empleado.FechaNacimiento} ${empleado.FechaContratacion}</strong>
                </p>
            </div>

            <div class="front-content">
                <small class="badge">${empleado.Ciudad} ${empleado.Regiones} ${empleado.Pais} ${empleado.CodigoPostal}</small>
                <div class="description">
                <div class="title">
                <button class="edit-button update" id="${empleado._id}" data-bs-toggle="modal" data-bs-target="#modalUpdate">
                <svg class="edit-svgIcon" viewBox="0 0 512 512">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                    </svg>
                </button>
                <button class="delete-button eliminar" id="${empleado._id}">
                <svg class="delete-svgIcon" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                    </svg>
                </button>
                </div>
                <p class="card-footer">
                    ${empleado.Telefono} ${empleado.Extension}
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
        `;
  });
}

//Insert
const formulario = document.querySelector("#formEmpleado");
formulario.addEventListener("submit", insertEmpleado);

function insertEmpleado(e) {
  e.preventDefault();
  const Apellido = document.querySelector("#apellido").value;
  const Nombre = document.querySelector("#nombre").value;
  const Titulo = document.querySelector("#titulo").value;
  const TituloCortesia = document.querySelector("#tituloCortesia").value;

  const registro = {
    Apellido,
    Nombre,
    Titulo,
    TituloCortesia
  };

  if (validation(registro)) {
    alert("Todos los datos son obligatorios");
  }
  alert("Datos guardados correctamente.");
  return addEmpleado(registro);
}

function validation(Objeto) {
  return !Object.values(Objeto).every((element) => element !== "");
}

//Delete
const eliminar = document.querySelector("main");
eliminar.addEventListener("click", borrar);

function borrar(e) {
  if (e.target.classList.contains("eliminar")) {
    console.log(e.target);
    const idEmpleado = e.target.getAttribute("id");
    const confir = confirm("Desea eliminar este Empleado?");
    if (confir) {
      deleteEmpleado(idEmpleado);
    }
  }
}

//Read One
const infoEmpleado = document.querySelector("main");
infoEmpleado.addEventListener("click", getInfo);

async function getInfo(e) {
  if (e.target.classList.contains("update")) {
    const id = e.target.getAttribute("id");
    const informacion = await selectOne(id);

    const { _id, Apellido, Nombre, Titulo, TituloCortesia } = informacion;

    const nombre = document.querySelector("#nombreEdit");
    const apellido = document.querySelector("#apellidoEdit");
    const titulo = document.querySelector("#tituloEdit");
    const tituloCortesia = document.querySelector("#tituloCortesiaEdit");
    const idEdit = document.querySelector("#idEdit");

    nombre.value = Nombre;
    apellido.value = Apellido;
    titulo.value = Titulo;
    tituloCortesia.value = TituloCortesia;
    idEdit.value = _id;
  }
}

//Update
const formEdit = document.querySelector("#formEditEmpleado");
formEdit.addEventListener("submit", actualizar);

function actualizar(e) {
  e.preventDefault();
  const id = document.querySelector("#idEdit").value;
  const Apellido = document.querySelector("#apellidoEdit").value;
  const Nombre = document.querySelector("#nombreEdit").value;
  const Titulo = document.querySelector("#tituloEdit").value;
  const TituloCortesia = document.querySelector("#tituloCortesiaEdit").value;

  const datos = {
    Apellido,
    Nombre,
    Titulo,
    TituloCortesia
  };

  console.log(datos, id);

  return updateEmpleado(datos, id);
};
