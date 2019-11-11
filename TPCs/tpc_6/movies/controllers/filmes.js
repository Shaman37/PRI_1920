const Filme = require('../models/filmes');
const mongoose = require('mongoose')

const Filmes = module.exports;

Filmes.listar = () => {
    return Filme.find()
                .sort({ year: -1 })
                .exec()
};

Filmes.info = id => {
    return Filme.findOne({ _id: id })
                .exec()
};

Filmes.inserir = filme =>{
    filme._id = mongoose.Types.ObjectId()
    
    var novo = new Filme(filme)
    return novo.save()
};

Filmes.remover = id => {
    return Filme.deleteOne({_id:id}).exec()
};