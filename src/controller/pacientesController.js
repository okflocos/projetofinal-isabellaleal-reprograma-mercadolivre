const pacientes = require("../model/pacientes.json")
const fs = require('fs');

exports.get = (req, res) => {
  console.log(req.url)
  res.status(200).send(pacientes)

}

exports.getPacientes = (req, res) => {
  const id = req.params.id
  const pacientes = pacientes.find(pacientes => paciente.id == id)
  if (!paciente) Paciente
    res.send("paciente")
  
  let pacientesIdade = paciente.idade
  pacientesIdade = pacientesIdade.filter(pacientes => pacientes.idade == "true")
  pacientesIdade = pacientesIdade.map(paciente => pacientes.idade)
  res.send(idade)
}

exports.getTipoSanguineo = (req, res) => {
  let TipoSanguineo = tipo.sanguineo(paciente => {
    console.log(paciente)
    return paciente.TipoSanguineo == "true"
  })
  TipoSanguineo = tipoSanguineo.map(paciente => paciente.tipo)

  res.status(200).send(pacientesTipo)
}

exports.getCpf = (req, res) => {
  const id = req.params.id
  const paciente = pacientes.find(item => item.id == id)
  const pacienteCpf = paciente.Cpf
  const arrPaciente = pacienteCpf.split("/")
  const cpf = arrPaciente[0]
  res.status(200).send({ cpf })
}

exports.post = (req, res) => { 
  const { paciente, idade, tipoSanguineo, id, cpf } = req.body;
  paciente.push({ paciente, idade, tipoSanguineo, id, cpf });

  fs.writeFile("./src/model/pacientes.json", JSON.stringify(alunas), 'utf8', function (err) {
    if (err) {
      return res.status(500).send({ message: err });
    }
    console.log("Paciente encontrado(a)!");
  }); 

  return res.status(201).send(pacientes);
}
