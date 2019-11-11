const Compositor = require('../models/compositores');

const Compositores = module.exports;

Compositores.listar = () => {
    return Compositor
        .find()
        .exec()
};

Compositores.consultar_id = id => {
    return Compositor
        .find({"@id": id})
        .exec()
};

Compositores.consultar_periodo = per => {
    return Compositor
        .find({periodo: per})
        .exec()
};

Compositores.consultar_ano = year => {
    return Compositor
        .find({$and: [{dataNasc: {$lte: year}}, {dataObito: {$gte: year}}]})
        .exec()
};

Compositores.consultar_per_ano = (per,year) => {
    return Compositor
        .find({$and: [{dataNasc: {$lte: year}}, {dataObito: {$gte: year}},{periodo: per}]})
        .exec()
};