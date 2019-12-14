const Medicamentos = require("../model/medicamentos")

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

exports.put = (req, res) => {
  console.log('estoque atualizado')
  const medicamentos = Medicamentos(req.body)
  console.log(medicamentos) 
  medicamentos.save().then(function(){
    res.status(201).send(medicamentos)
   })
   .catch(function(err){
     res.status(500).send(err)
   })
}

exports.delete  = ( req , res ) => {
  const  id  =  req.params.id ;
  console.log('entrou no delete id: ' + id)
  Medicamentos.findOne({id}, function ( err , medicamento ) {
      medicamento.remove( function ( err ) {
        if ( ! err) {
            res.status(200 ). send ({message :  ' Medicamento removido com sucesso ... ' });
        }
        else {
            res.status(500)
        }
    })
  })

}