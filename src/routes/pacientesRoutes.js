const express = require("express")
const router = express.Router()
const controller = require("../controller/pacientesController")

/**
 * @api {get} / Listar ou pegar pacientes.
 * @apiVersion 0.1.0
 * @apiName getPacientes
 * @apiGroup Pacientes
 *
 *
 * @apiSuccess {Array} Vai puxar os dados dos pacientes e outras informações.
 *
 * @apiSuccessExample Success-Response:  
 *     HTTP/1.1 200 OK
 *     [{
 *       "id": "1",
 *       "paciente": "Aline"
 *       "idade": "30"
 *       "tiposanguineo": "O+"
 *       "cpf": "9472247294828"       
 *     }]
 *
 *
 */



router.get("/", controller.get)



/**
 * @api {get} /:id Pegar um unico paciente
 * @apiVersion 0.1.0
 * @apiName getByIdPaciente
 * @apiGroup Pacientes
 *
 *
 * @apiSuccess {Object} Retorna um unico paciente pelo id
 *
 * @apiSuccessExample Success-Response:  
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "paciente": "Aline"
 *       "idade": "30"
 *       "tiposanguineo": "O+"
 *       "cpf": "9472247294828"       
 *     }
 *
 *
 */


router.get("/:id", controller.getById)


/**
 * @api {post} / Adiciona um paciente
 * @apiVersion 0.1.0
 * @apiName postPaciente
 * @apiGroup Pacientes
 * @apiParam {Number} passar o id.
 *
 * @apiSuccess {Object} Retorna o paciente cadastrado
 *
 * @apiSuccessExample Success-Response:  
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "paciente": "Aline"
 *       "idade": "30"
 *       "tiposanguineo": "O+"
 *       "cpf": "9472247294828"       
 *     }
 *
 *
 */

router.post("/", controller.post)



/**
 * @api {put} /:id Altera o paciente
 * @apiVersion 0.1.0
 * @apiName putPaciente
 * @apiGroup Pacientes
 * @apiParam {Number} passar o id.
 *
 * @apiSuccess {Object} Retorna o paciente alterado
 *
 * @apiSuccessExample Success-Response:  
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "paciente": "Aline"
 *       "idade": "30"
 *       "tiposanguineo": "O+"
 *       "cpf": "9472247294828"       
 *     }
 *
 *
 */



router.put("/:id", controller.put)

/**
 * @api {delete} /:id Deletar paciente.
 * @apiName deletePaciente
 * @apiGroup Pacientes
 *
 * @apiParam {Number} passar o id.
 *
 * @apiSuccess {Object} Vai remover a id de um paciente.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": " Medicamento removido com sucesso!",
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 204 NO CONTENT
 *     {
 *       "message": "ID não encontrado"
 *     }
 */

router.delete("/:id", controller.delete);

module.exports = router