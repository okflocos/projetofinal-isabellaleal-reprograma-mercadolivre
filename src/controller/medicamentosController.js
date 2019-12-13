const Medicamentos = require("../model/medicamentos")

// exports.get = (req, res) => {
//   const pacientesId = medicamentos.map(item => {
//      item.paciente = "*********"
//      return item
//   })

//   res.status(200).send(pacientesId)
// }

exports.post = (req, res) => {
  console.log('entrou aqui')
  const medicamentos = new Medicamentos(req.body) 
  medicamentos.save() 
  .then(function(){
   res.status(201).send(medicamentos)
  })
  .catch(function(err){
    res.status(500).send(err)
  })
}



// exports.getById = (req, res) => {
//   const id = req.params.id
//   const medicamento = medicamentos.find(paciente => paciente.id == id)
//   res.status(200).send(medicamento)
// }

// exports.getDoença = (req, res) => {
//   const doença = req.params.id
//   const pacientes = doença.find(pacientes => doença.id == id)
//   if (!paciente) Paciente
//     res.send("doença")
  
//   const pacientesDoença = paciente.doença
//   const pacientesDoença = pacientesDoença.filter(pacientes => pacientes.doença == "true")
//   const pacientesDoença = pacientesDoença.map(paciente => pacientes.doença)
//   res.send(doença)
//   }

// exports.post = (req, res) => { 
//   const { paciente, idade, tipoSanguineo, id, cpf, doença } = req.body;
//   professoras.push({ paciente, idade, tipoSanguineo, id, cpf, doença});

//   fs.writeFile("./src/model/medicamentos.json", JSON.stringify(medicamentos), 'utf8', function (err) {
//     if (err) {
//       return res.status(500).send({ message: doença });
//     }
//     console.log("O medicamento foi encontrado!");
//   }); 

//   return res.status(201).send(paciente);
// }
