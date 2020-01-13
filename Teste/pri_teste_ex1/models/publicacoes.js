const mongoose = require('mongoose');

var publicacaoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: String,
    id: String,
    authors: Array,
    title: String,
    booktitle: String,
    address: String,
    year: String,
    month: String,
    doi: String
});

module.exports = mongoose.model('publicacoes', publicacaoSchema);