const app = require("./src/app")
const port = 3000

app.listen(port, function() {
  console.log(`app está rodando na porta ${port}`)
})  

app.use(express.static('doc'))_  
app.get('/api-doc',(req,res) => {
    res.sendFile(__dirname + '/doc/index.html');
})