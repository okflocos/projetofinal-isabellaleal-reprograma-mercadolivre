const express = require("express")
const mongoose = require("mongoose")

const app = express()

mongoose.connect("mongodb+srv://admin:230853@isabellalealx-qdxrv.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true});  

let db = mongoose.connection; 
db.on("error", console.log.bind(console, "connection error:"))  
db.once("open", function(){
  console.log("conexão feita com sucesso")
})

//rotas
const index = require("./routes/index")
const pacientes = require("./routes/pacientesRoute")
const medicamentos = require("./routes/medicamentosRoute")

app.use(express.json()); 

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use("/", index)
app.use("/pacientes", pacientes)
app.use("/medicamentos", medicamentos)

module.exports = app