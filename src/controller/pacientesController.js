const Pacientes = require("../model/pacientes");

exports.post = async (req, res) => {
  try {
    const pacientes = new Pacientes(req.body);
    await pacientes.save();
    res.status(200).send(pacientes);
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;

    const paciente = await Pacientes.findById(id);

    res.status(200).send(paciente);
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
};

exports.get = async (req, res) => {
  try {
    const pacientes = await Pacientes.find({});

    console.log('pacientes',pacientes)

    

    res.status(200).send(pacientes);
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
};

exports.put = async (req, res) => {
  try {
    const pacientes = new Pacientes(req.body);
    await pacientes.save();
    res.status(200).send(pacientes);
  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
};

exports.delete = (req, res) => {
  const id = req.params.id;
  
  Pacientes.findById(id , function(err, paciente) {
    paciente.remove(function(err) {
      if (!err) {
        res.status(200).send({ message: "Paciente removido com sucesso ... " });
      } else {
        res.status(500);
      }
    });
  });
};
