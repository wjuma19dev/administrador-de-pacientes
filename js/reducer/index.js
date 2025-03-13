import * as type from "../actions/type.js";

const reducer = (state, action) => {
  switch (action.type) {
    case type.FETCH_PACIENTE:
      return { ...state, pacientes: [...state.pacientes, action.payload] };
    case type.ADD_PACIENTE:
      const existePaciente = state.pacientes.filter(
        (p) => p.nombre === action.payload.nombre
      );
      if (existePaciente.length === 0) {
        state.pacientes.push(action.payload);
      }
      return { ...state, pacientes: [...state.pacientes, action.payload] };
    case type.FETCH_DATA:
      return state;
    case type.AGREGAR_MEDICO:
      state.medicos.push(action.medico);
      return { ...state, medicos: [...state.medicos, action.medico] };
    default:
      return state;
  }
};

export default reducer;
