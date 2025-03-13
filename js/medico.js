// import { fetchData } from "./actions/index.js";
// import { dispatch } from "./dispatch.js";
// dispatch(fetchData());

import { useSelector } from "./dispatch.js";
import Medico from "./models/medico.model.js";

const state = useSelector((state) => state);

let medico = {
  nombre: "",
  especialidad: "",
};

// Accesos al DOM
const nuevoMedicoBtn = document.querySelector("#nuevo-medico-btn");
const btnGuardar = document.querySelector("#nuevo-medico-btn-guardar");
const inputs = document.querySelectorAll("input");
// Instancia del modal para la creacion de un nuevo médico
const nuevoMedicoModal = new bootstrap.Modal(
  document.querySelector("#nuevo-medico-modal"),
  {
    keyboard: true,
  }
);

document.addEventListener("DOMContentLoaded", () => {
  Medico.imprimir(document.querySelector("#medicos-tbody"));
  btnGuardar.disabled = true;
  // Eventos
  nuevoMedicoBtn.addEventListener("click", crearNuevoMedico);
  btnGuardar.addEventListener("click", guardar);
  inputs.forEach((input) => {
    input.addEventListener("input", obtenerInputValor);
    input.addEventListener("blur", obtenerInputValor);
  });
});

// Funcionaes
function crearNuevoMedico() {
  console.log("MEDICO/NUEVO_MEDICO_MODAL_MOSTRAR");
  nuevoMedicoModal.show();
}

function guardar(e) {
  // Mensaje en consola
  console.log("MEDICO/GUARDAR_MEDICO_MODAL_CERRAR");

  // Crear un nuevo médico
  const nuevoMedico = new Medico(medico);
  nuevoMedico.agregar().then(() => {
    Medico.imprimir(document.querySelector("#medicos-tbody"));
  });

  // Limpiar el formulario
  medico = {
    nombre: "",
    especialidad: "",
  };
  inputs.forEach((input) => {
    input.value = medico[input.name];
    btnGuardar.disabled = true;
    input.classList.remove("is-valid");
    input.parentElement.classList.remove("valid-feedback");
    input.parentElement.querySelector(".valid-feedback")?.remove();
  });

  // Cerrar el modal
  nuevoMedicoModal.hide();
}

function obtenerInputValor(e) {
  // console.log(e.target.value);
  validate(e);
  medico[e.target.name] = e.target.value;
  if (!estaVacio(medico.nombre) && !estaVacio(medico.especialidad)) {
    btnGuardar.disabled = false;
  } else {
    btnGuardar.disabled = true;
  }
}

function validate(e) {
  const texto = e.target.value;
  if (estaVacio(texto)) {
    mostrarErrorCampoVacio(e);
  } else {
    eliminarErrorCampoVacio(e);
  }
}

function estaVacio(texto) {
  return texto.trim() >= 0;
}

/**
 *
 * VALIDAR CAMPO VACIO
 */
function mostrarErrorCampoVacio(e) {
  // Elementos
  const divPadre = e.target.parentElement;
  const feedback = document.createElement("DIV");

  // Remover el feedback de validado
  divPadre.querySelector(".valid-feedback")
    ? divPadre.querySelector(".valid-feedback").remove()
    : null;
  divPadre.classList.remove("has-success");
  e.target.classList.remove("is-valid");

  feedback.classList.add("invalid-feedback");
  feedback.textContent = `El campo ${e.target.name} es obligatorio.`;

  divPadre.classList.add("has-danger");
  divPadre.querySelector(".invalid-feedback")
    ? null
    : divPadre.appendChild(feedback);

  e.target.classList.add("is-invalid");
}

function eliminarErrorCampoVacio(e) {
  const divPadre = e.target.parentElement;

  // Remover el feedback de error
  divPadre.querySelector(".invalid-feedback")
    ? divPadre.querySelector(".invalid-feedback").remove()
    : null;
  divPadre.classList.remove("has-danger");
  e.target.classList.remove("is-invalid");

  const feedback = document.createElement("DIV");
  feedback.classList.add("valid-feedback");
  feedback.textContent = `¡Bien!.`;
  divPadre.classList.add("has-success");
  divPadre.querySelector(".valid-feedback")
    ? null
    : divPadre.appendChild(feedback);
  e.target.classList.add("is-valid");
}
