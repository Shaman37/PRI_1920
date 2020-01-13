var express = require('express');
var router = express.Router();


var Publicacoes = require('../controllers/publicacoes');

/* GET users listing. */
router.get('/pubs', function (req, res, next) {
  const type = req.query.type;
  const year = req.query.year;
  const author = req.query.autor;

  if (type == null && year == null && author == null) {
    Publicacoes.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }

  if (type != null && year != null && author == null) {
    Publicacoes.consultar_tipo_ano(type, year)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }

  if (type != null && year == null && author == null) {
    Publicacoes.consultar_tipo(type)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }

  if (type == null && year == null && author != null) {
    Publicacoes.consultar_autor(author)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }

});

/* GET users listing. */
router.get('/pubs/:id', function (req, res, next) {
  Publicacoes.consultar_id(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

/* GET users listing. */
router.get('/types', function (req, res, next) {
  Publicacoes.listar_tipos()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

/* GET users listing. */
router.get('/autores', function (req, res, next) {
  Publicacoes.listar_autores()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;
