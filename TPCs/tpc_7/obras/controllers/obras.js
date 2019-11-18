const Obra = require('../models/obras');

const Obras = module.exports;

Obras.listar = () => {
    return Obra.find()
               .sort({ anoCriacao: -1 })
               .exec()
};

Obras.listar_anoCriacao = ano => {
    return Obra.find({ anoCriacao: ano })
               .sort({ anoCriacao: -1 })
               .exec()
};

Obras.listar_periodo = per => {
    return Obra.find({ periodo: per })
               .sort({ anoCriacao: -1 })
               .exec()
};

Obras.listar_compositor = comp => {
    return Obra.find({ compositor: comp })
               .sort({ anoCriacao: -1 })
               .exec()
};

//---

Obras.listar_ano_per = (ano,per) => {
    return Obra.find({$and: [{anoCriacao: ano}, {periodo: per}]})
               .sort({ anoCriacao: -1 })
               .exec()
};

Obras.listar_ano_comp = (ano,comp) => {
    return Obra.find({$and: [{anoCriacao: ano}, {compositor: comp}]})
               .sort({ anoCriacao: -1 })
               .exec()
};

Obras.listar_per_comp = (per,comp) => {
    return Obra.find({$and: [{periodo: per}, {compositor: comp}]})
               .sort({ anoCriacao: -1 })
               .exec()
};

//---

Obras.listar_ano_per_comp = (ano,per,comp) => {
    return Obra.find({$and: [{anoCriacao: ano}, {periodo: per}, {compositor: comp}]})
               .sort({ anoCriacao: -1 })
               .exec()
};

//--

Obras.listar_compositores = () => {
    return Obra.aggregate([{$group: {_id: "$compositor", numObras: {$sum:1}}},{$sort: {_id: 1}}])
               .sort({ anoCriacao: -1 })
               .exec()
};

Obras.obras_comp = (comp) => {
    return Obra
        .aggregate([{$match: {compositor: comp}} , {$group: {_id: "$compositor", obras: {$push: "$nome"} }}])
}