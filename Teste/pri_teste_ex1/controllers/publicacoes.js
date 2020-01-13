const Publicacao = require('../models/publicacoes');

const Publicacoes = module.exports;

Publicacoes.listar = () => {
    return Publicacao
        .find({}, { id: 1, title: 1, year: 1, type: 1 })
        .exec()
};

Publicacoes.consultar_id = id => {
    return Publicacao
        .find({ id: id })
        .exec()
};

Publicacoes.listar_tipos = () => {
    return Publicacao
        .distinct("type")
        .exec()
};

Publicacoes.consultar_tipo = tipo => {
    return Publicacao
        .find({ type: tipo })
        .exec()
};

Publicacoes.consultar_tipo_ano = (tipo, ano) => {
    return Publicacao
        .find({ $and: [{ year: ano }, { type: tipo }] })
        .exec()
};

Publicacoes.consultar_autor = author => {
    return Publicacao
        .find({ authors: author })
        .exec()
};

Publicacoes.listar_autores = () => {
    return Publicacao
        .aggregate([{ $unwind: "$authors" }, 
                    { $group: { _id: "$authors" , titles: {$push: "$title"}}}, 
                    {$sort:{ _id: 1 }
        }])
}