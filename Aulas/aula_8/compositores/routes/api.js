const express = require('express');

const router = express.Router();

var Compositores = require('../controllers/compositores');

router.get('/', function(req,res){
    res.render('index');
});

/* GET compositores listing */
router.get('/compositores', function (req, res, next) {
    const periodo = req.query.periodo;
    const ano = req.query.ano;

    if (periodo == null && ano == null) {
        Compositores.listar()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    
    if (periodo != null && ano != null) {
        Compositores.consultar_per_ano(periodo,ano)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    
    if (periodo == null && ano != null) {
        Compositores.consultar_ano(ano)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    
    if (periodo != null && ano == null) {
        Compositores.consultar_periodo(periodo)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
});

router.get('/compositores/:id', function (req, res, next) {
    Compositores.consultar_id(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router