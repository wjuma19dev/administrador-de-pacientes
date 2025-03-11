import { useSelector } from "../dispatch.js";
import { removerElementosDePantalla } from "../formulario.js";
// import { citas } from "./cita.js";

const citasContainer = document.querySelector("#citas-container");

const citas = useSelector((state) => state.citas);

class Ui {
  static displayCitas() {
    removerElementosDePantalla(citasContainer);
    citas.forEach((cita) => {
      const { id, paciente, edad, seguro, dir, cuadro } = cita;
      const div = document.createElement("div");
      div.setAttribute("id", "cita-card");
      div.dataset.cid = id;
      div.classList.add("card", "mb-3");
      div.innerHTML = `
        <div class="card-body">
          <h3 class="card-title text-capitalize">${paciente}</h3>
          <p class="card-text">
            <span class="badge bg-primary text-capitalize">Edad: ${edad}</span>
            <span class="badge bg-primary text-capitalize">Seguro: ${seguro}</span>
            <span class="badge bg-primary text-capitalize">Direccion: ${dir}</span>
            <span class="badge bg-primary text-capitalize">Cuadro: ${cuadro}</span>
          </p>
          <a href="#" class="btn btn-danger text-capitalize eliminar" data-id="${id}">
            <i class="bi bi-trash"></i>
            </a>
          <a href="#" class="btn btn-warning text-capitalize eliminar" data-id="${id}">
            <i class="bi bi-pencil"></i>
          </a>
        </div>
      `;
      citasContainer.appendChild(div);
    });
  }
}

export default Ui;
