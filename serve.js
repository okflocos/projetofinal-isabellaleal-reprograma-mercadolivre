const app = require("./app")
const path = require("path")
const port = process.env.PORT || 3000

app.listen(port, function() {
  console.log(`app está rodando na porta ${port}`)
})  

// app.use(express.static('doc'))  
app.get('/api-doc',(req,res) => {
    res.sendFile(path.join(__dirname + '/doc/index.html'));
})

