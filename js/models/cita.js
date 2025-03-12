const citas = [];

class Cita {
  constructor({ paciente, edad, seguro, dir, cuadro }) {
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
    console.log(citas);
    return this;
  }
}

export default Cita;
