const express = require("express")
const router = express.Router()
const controller = require("../controller/pacientesController")

/**
 * @api {get}/ Lista de pacientes
 * @apiName Node Pharmacy
 * @apiGroup Pacientes
 * 
 * @apiSucess {String} Retorna os dados do paciente
 */

router.get("/", controller.get)
router.delete('/', controller.deleteId);

module.exports = router
