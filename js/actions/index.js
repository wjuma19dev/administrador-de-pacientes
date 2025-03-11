import * as type from "./type.js";

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
