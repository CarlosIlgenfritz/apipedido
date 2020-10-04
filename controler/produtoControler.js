const mongoose = require('mongoose');
const produtoSchema = require('../models/produtoSchema')
mongoose.connect('mongodb+srv://admin:admin@cluster0.luhu6.mongodb.net/trabalho?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const Produto = mongoose.model('Produto', produtoSchema);



module.exports = controler = {
    async listaTodosProdutos() {
        var arr = await Produto.find().then((response) => {
            return response
        }).catch(erro => {
            console.log(erro)
        })
        return arr
    },

    async adicionaProduto(data) {
        const novoProduto = new Produto(data);
        return await novoProduto.save().then((response) => { return response });
    },
    async atualizaDadosProduto(data, id) {
        const dadoAtualizado = await Produto.findOneAndReplace({ _id: mongoose.Types.ObjectId(id) }, data).then((response) => {
            return response
        }).catch(erro => {
            console.log(erro)
        })
        let todosDadosAtualizados = await Produto.find().then((response) => {
            return response
        }).catch(erro => {
            console.log(erro)
        })
        return todosDadosAtualizados
    },
    async deletaProduto(id) {
        const ProdutoDeletado = await Produto.findOneAndDelete({ _id: mongoose.Types.ObjectId(id) }).then((response) => {
            console.log(response)
        }).catch(erro => {
            console.log(erro)
        })
        return ProdutoDeletado
    },
}