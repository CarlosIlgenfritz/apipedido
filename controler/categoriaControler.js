const mongoose = require('mongoose');
const categoriaSchema = require('../models/categoriaSchema')
mongoose.connect('mongodb+srv://admin:admin@cluster0.luhu6.mongodb.net/trabalho?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const Categoria = mongoose.model('Categoria', categoriaSchema);



module.exports = controler = {
    async listaTodasCategorias() {
        var arr = await Categoria.find().then((response) => {
            return response
        }).catch(erro => {
            console.log(erro)
        })
        return arr
    },

    async adicionaCategoria(data) {
        const novaCategoria = new Categoria(data);
        return await novaCategoria.save().then((response) => { return response });
    },
    async atualizaDadosCategoria(data, id) {
        const dadoAtualizado = await Categoria.findOneAndReplace({ _id: mongoose.Types.ObjectId(id) }, data).then((response) => {
            return response
        }).catch(erro => {
            console.log(erro)
        })
        let todosDadosAtualizados = await Categoria.find().then((response) => {
            return response
        }).catch(erro => {
            console.log(erro)
        })
        return todosDadosAtualizados
    },
    async deletaCategoria(id) {
        const categoriaDeletada = await Categoria.findOneAndDelete({ _id: mongoose.Types.ObjectId(id) }).then((response) => {
            console.log(response)
        }).catch(erro => {
            console.log(erro)
        })
        return categoriaDeletada
    },
}