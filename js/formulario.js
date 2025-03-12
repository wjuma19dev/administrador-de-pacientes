import Cita from "./models/cita.js";

const CITAS_FORM = document.querySelector("#nueva-cita-form");
const inputs = document.querySelectorAll("input");
const seguroCampo = document.querySelector("#seguro");
const cuadroCampo = document.querySelector("#cuadro");

const nuevaCita = {
  paciente: "",
  edad: "",
  seguro: "",
  dir: "",
  cuadro: "",
};

document.addEventListener("DOMContentLoaded", () => {
  inputs.forEach((input) => {
    switch (input.name) {
      case "edad":
        input.addEventListener("change", inputHandleChange);
        break;
      default:
        input.addEventListener("input", inputHandleChange);
    }
  });

  seguroCampo.addEventListener("change", inputHandleChange);
  cuadroCampo.addEventListener("input", inputHandleChange);

  // TODO: Enviar Formulario aqui
  CITAS_FORM.addEventListener("submit", function (e) {
    e.preventDefault();

    const isValid = Object.values(nuevaCita).some(
      (campo) => campo.trim().length === 0
    );
    if (!!isValid) {
      console.log("Todos los campos son obligatorios");
      return;
    }

    const cita = new Cita(nuevaCita);
    cita.create().then((citaCreada) => console.log(citaCreada));
  });
});

function inputHandleChange(e) {
  nuevaCita[e.target.name] = e.target.value;
}
