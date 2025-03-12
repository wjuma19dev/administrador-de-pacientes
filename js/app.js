import "./formulario.js";
import Cita from "./models/cita.js";

const fetchCitasBtn = document.getElementById("fetch-citas-btn");

fetchCitasBtn.onclick = () => {
  console.log(Cita.findAll);
};
