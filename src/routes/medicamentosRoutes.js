const express = require("express")
const router = express.Router()
const controller = require("../controller/medicamentosController")

/**
 * @api {post}/ Adiciona
 * @apiName Node Pharmacy
 * @apiGroup Medicamentos
 * 
 * @apiSucess {String} Um medicamento será adicionado a farmácia.
 */

router.post("/", controller.post)   
router.put("/", controller.put)
router.delete("/" , controller.delete)

module.exports = router