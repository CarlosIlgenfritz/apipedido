const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categoria = new Schema({
    descricao: String,
});
module.exports = categoria