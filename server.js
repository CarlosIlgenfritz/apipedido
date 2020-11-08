var bodyParser = require('body-parser')
const categoriaControler = require('./controler/categoriaControler')
const produtoControler = require('./controler/produtoControler')
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;


app.listen(port)
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader('Content-Type', 'application/json');

    next();
})

app.get("/listaCategoria", async(req, res) => {
    res.send(await categoriaControler.listaTodasCategorias())
})
app.post("/adicionaCategoria", async(req, res) => {
    console.log(req)
    res.send(await categoriaControler.adicionaCategoria(req.body))
})
app.put("/atualizaCategoria/:id", async(req, res) => {
    res.send(await categoriaControler.atualizaDadosCategoria(req.body, req.params.id))
})
app.delete("/deletaCategoria/:id", async(req, res) => {
    res.send(await categoriaControler.deletaCategoria(req.params.id))
})

app.get("/listaProduto", async(req, res) => {
    res.send(await produtoControler.listaTodosProdutos())
})
app.post("/adicionaProduto", async(req, res) => {
    res.send(await produtoControler.adicionaProduto(req.body))
})
app.put("/atualizaProduto/:id", async(req, res) => {
    res.send(await produtoControler.atualizaDadosProduto(req.body, req.params.id))
})
app.delete("/deletaProduto/:id", async(req, res) => {
    res.send(await produtoControler.deletaProduto(req.params.id))
})

console.log('servidor ouvindo na porta ' + port);