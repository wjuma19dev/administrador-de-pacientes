import { fetchPacientes } from "./actions/index.js";
import { dispatch, useSelector } from "./dispatch.js";
import "./formulario.js";
import { citas } from "./models/cita.js";
import Ui from "./models/ui.js";

const fetchCitasBtn = document.getElementById("fetch-citas-btn");

const state = useSelector((state) => state);

window.addEventListener("load", () => {
  dispatch(fetchPacientes());
  Ui.displayCitas();
});

fetchCitasBtn.onclick = () => {
  console.log(state);
  Ui.displayCitas();
};
