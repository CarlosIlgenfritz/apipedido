const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const produto = new Schema({
    categoriaId: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    },
    nome: {
        type: String,
        minlength: 5,
        maxlength: 100,
        required: true

    },
    valor: {
        type: Number,
        min: 0,
        required: true
    },
    descricao: {
        type: String,
        minlength: 10,
        required: true
    }
});
module.exports = produto