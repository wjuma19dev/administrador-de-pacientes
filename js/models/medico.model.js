import { agregarMedico } from "../actions/index.js";
import { dispatch, useSelector } from "../dispatch.js";
import { makeRandomId } from "../libs/makeRandomId.js";

const { medicos } = useSelector((state) => state);

export const medicoEstados = {
  ACTIVO: "ACTIVO",
  INACTIVO: "INACTIVO",
  EN_SERVICIO: "EN_SERVICIO",
  AUSENTE: "AUSENTE",
};

class Medico {
  constructor({ nombre, especialidad }) {
    this.id = makeRandomId(24);
    this.estado = medicoEstados.INACTIVO;
    this.nombre = nombre;
    this.especialidad = especialidad;
    this.citas = [];
    this.consultas = [];
  }

  async agregar() {
    dispatch(agregarMedico(this));
    return true;
  }

  static imprimir(contenedor) {
    // Limpiar el contenedor
    while (contenedor.firstChild) {
      contenedor.removeChild(contenedor.firstChild);
    }
    medicos.map((medico) => {
      const tr = document.createElement("tr");
      const medicoEstadoCampo = document.createElement("th");
      medicoEstadoCampo.textContent = medico.estado;
      const medicoNombreCampo = document.createElement("td");
      medicoNombreCampo.textContent = medico.nombre;
      const medicoEspecialidadCampo = document.createElement("td");
      medicoEspecialidadCampo.textContent = medico.especialidad;
      const medicoCitasCampo = document.createElement("td");
      medicoCitasCampo.innerHTML = `<span class="badge rounded-pill bg-info">${medico.citas.length}</span>`;
      const medicoConsultasCampo = document.createElement("td");
      medicoConsultasCampo.innerHTML = `<span class="badge rounded-pill bg-info">${medico.consultas.length}</span>`;
      const medicoAccionesCampo = document.createElement("td");
      medicoAccionesCampo.innerHTML = `
        <a class="pointer text-danger" data-medico-id="${medico.id}"
          ><i class="bi bi-trash fs-4"></i
        ></a>
        <a class="mx-2 pointer text-secondary" data-medico-id="${medico.id}"
          ><i class="bi bi-pencil-square fs-4"></i
        ></a>
      `;

      tr.append(
        medicoEstadoCampo,
        medicoNombreCampo,
        medicoEspecialidadCampo,
        medicoCitasCampo,
        medicoConsultasCampo,
        medicoAccionesCampo
      );
      contenedor.append(tr);
    });
  }
}

export default Medico;

// template = `<tr>
// <th scope="row" class="text-success">${medico.estado}</th>
// <td>${medico.nombre}</td>
// <td>${medico.especialidad}</td>
// <td><span class="badge rounded-pill bg-info">${medico.citas.lenght}</span></td>
// <td><span class="badge rounded-pill bg-info">${medico.consultas.lenght}</span></td>
// <td>
//   <a class="pointer text-danger"
//     ><i class="bi bi-trash fs-4"></i
//   ></a>
//   <a class="mx-2 pointer text-secondary">
//     <i class="bi bi-pencil-square fs-4"></i>
//   </a>
//   <a class="pointer text-secondary">
//     <i class="bi bi-binoculars-fill fs-4"></i>
//   </a>
// </td>
// </tr> `;
