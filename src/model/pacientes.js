const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pacientesSchema = new Schema(
  {
    paciente: { type: String },
    idade: { type: String, required: true },
    tipo_sanguineo: { type: String,},    
    cpf: { type: String}
  },
  {
    versionKey: false
  }
);

// exports.deleteMention = async id => {
//     await Mentions.findOneAndRemove(id);
//   };
  
const Pacientes = mongoose.model("Pacientes", pacientesSchema);

module.exports = Pacientes;