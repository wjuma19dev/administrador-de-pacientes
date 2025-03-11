// Accesos al DOM
const nuevoMedicoBtn = document.querySelector("#nuevo-medico-btn");

// Instancia del modal para la creacion de un nuevo médico
const nuevoMedicoModal = new bootstrap.Modal(
  document.querySelector("#nuevo-medico-modal"),
  {
    keyboard: true,
  }
);

// Agregar evento al boton crear nuevo médico
nuevoMedicoBtn.addEventListener("click", crearNuevoMedico);

// Funcionaes
function crearNuevoMedico() {
  console.log("MEDICO/NUEVO_MEDICO_MODAL");
  nuevoMedicoModal.show();
}
