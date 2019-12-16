const express = require("express")
const router = express.Router()
const controller = require("../controller/medicamentosController")


/**
 * @api {get} / Pegar todos os medicamentos.
 * @apiName getMedicamentos
 * @apiGroup Medicamentos
 *
 *
 * @apiSuccess {Array} Retorna todos os medicamentos
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "id": "5df5570b1c9d440000f4881a",
 *       "doença": "asma"
 *       "medicamento": "spiriva"
 *     }]
 *
 
 */

router.get("/", controller.get)   
/**
 * @api {get} /:id Pegar um unico medicamento.
 * @apiName getByIdMedicamento
 * @apiGroup Medicamentos
 * 
 * @apiParam {Number} Passar o id.
 *
 * @apiSuccess {Object} Retorna um medicamento
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "5df5570b1c9d440000f4881a",
 *       "doença": "asma"
 *       "medicamento": "spiriva"
 *     }
 *
 
 */

router.get("/:id", controller.getById)   


/**
 * @api {post} / Adicionar dados.
 * @apiName postMedicamentos
 * @apiGroup Medicamentos
 *
 *
 * @apiSuccess {Object} Retorna o novo medicamento.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "5df5570b1c9d440000f4881a",
 *       "doença": "asma"
 *       "medicamento": "spiriva"
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *       "message": "Não foi possível adicionar"
 *     }
 */

router.post("/", controller.post)   

/**
 * @api {put} /:id Ele altera o medicamento.
 * @apiName putMedicamento
 * @apiGroup Medicamentos
 *
 * @apiParam {Number} Passar o id.
 *
 * @apiSuccess {Object} Vai retornar o que alterou no medicamento, leia a bula antes de usar o medicamento!  
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
	"id": "5df556c81c9d440000f48818",
	"doença": "depressão",
	"medicamento": "sertralina"
}
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Não foi possível alterar o medicamento"
 *     }
 */

router.put("/:id", controller.put)



/**
 * @api {delete} /:id Deleta medicamento
 * @apiName deleteMedicamento
 * @apiGroup Medicamentos
 *
 * @apiParam {Number} Passar o id. ok
 *
 * @apiSuccess {Boolean} Vai retornar True quando deletado.
 *
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Não foi possível deletar o medicamento"
 *     }
 */

router.delete("/:id" , controller.delete)

module.exports = router