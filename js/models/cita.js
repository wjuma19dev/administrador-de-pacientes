import { useSelector } from "../dispatch.js";

const citas = useSelector((state) => state.citas);

class Cita {
  constructor({ paciente, edad, seguro, dir, cuadro }) {
    this.id = citas.length > 0 ? citas[citas.length - 1].id + 1 : 1;
    this.paciente = paciente;
    this.edad = edad;
    this.seguro = seguro;
    this.dir = dir;
    this.cuadro = cuadro;
  }

  static get findAll() {
    return [...citas];
  }

  async create() {
    citas.push(this);
    return this;
  }

  removeById = async () => {};
}

export { citas };
export default Cita;
