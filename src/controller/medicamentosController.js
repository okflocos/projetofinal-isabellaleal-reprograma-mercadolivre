const Medicamentos = require("../model/medicamentos");

exports.post = (req, res) => {
  console.log("entrou aqui");
  const medicamentos = new Medicamentos(req.body);
  medicamentos
    .save()
    .then(function() {
      res.status(200).send(medicamentos);
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
};

exports.get = async (req, res) => {
  try {
    const medicamentos = await Medicamentos.find({});

    res.status(200).send(medicamentos);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;

    const medicamento = await Medicamentos.findById(id);

    res.status(200).send(medicamento);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.put = async (req, res) => {
  try {
    const id = req.params.id;

    await Medicamentos.updateOne({ _id:id },req.body,{ multi: true });

    const medicamentos = await Medicamentos.findById(id);

    res.status(200).send(medicamentos);

  } catch (error) {
    res.status(500).send({
      message: error.message
    });
  }
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Medicamentos.findById(id, function(err, medicamento) {
    medicamento.remove(function(err) {
      if (!err) {
        res
          .status(200)
          .send({ message: " Medicamento removido com sucesso ... " });
      } else {
        res.status(500);
      }
    });
  });
};
