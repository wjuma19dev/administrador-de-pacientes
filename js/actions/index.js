import * as type from "./type.js";

export const fetchData = () => {
  return {
    type: type.FETCH_DATA,
  };
};
export const fetchPacientes = () => {
  return {
    type: type.FETCH_PACIENTE,
  };
};
export const addPaciente = (paciente) => {
  return {
    type: type.ADD_PACIENTE,
    payload: paciente,
  };
};
export const agregarMedico = (medico) => {
  return {
    type: type.AGREGAR_MEDICO,
    medico,
  };
};
