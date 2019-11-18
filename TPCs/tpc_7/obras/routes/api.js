const express = require('express');
const router = express.Router();

var Obras = require('../controllers/obras');

/* GET students listing */
router.get('/obras', function (req, res, next) {
      let periodo = req.query.periodo
      let anoCriacao = req.query.anoCriacao
      let compositor = req.query.compositor

      // Sem Query Parameters
      if (periodo == null && anoCriacao == null && compositor == null) {
            Obras.listar()
                  .then(dados => res.jsonp(dados))
                  .catch(erro => res.status(500).jsonp(erro))
      }
      // Com Query Parameter: periodo
      else if (periodo != null && anoCriacao == null && compositor == null) {
            Obras.listar_periodo(periodo)
                  .then(dados => res.jsonp(dados))
                  .catch(erro => res.status(500).jsonp(erro))
      }
      // Com Query Parameter: anoCriacao
      else if (periodo == null && anoCriacao != null && compositor == null) {
            Obras.listar_anoCriacao(anoCriacao)
                  .then(dados => res.jsonp(dados))
                  .catch(erro => res.status(500).jsonp(erro))
      }
      // Com Query Parameter: compositor
      else if (periodo == null && anoCriacao == null && compositor != null) {
            Obras.listar_compositor(compositor)
                  .then(dados => res.jsonp(dados))
                  .catch(erro => res.status(500).jsonp(erro))
      }
      // Com Query Parameter: periodo e anoCriacao
      else if (periodo != null && anoCriacao != null && compositor == null) {
            Obras.listar_ano_per(anoCriacao, periodo)
                  .then(dados => res.jsonp(dados))
                  .catch(erro => res.status(500).jsonp(erro))
      }
      // Com Query Parameter: periodo e compositor
      else if (periodo != null && anoCriacao == null && compositor != null) {
            Obras.listar_per_comp(periodo, compositor)
                  .then(dados => res.jsonp(dados))
                  .catch(erro => res.status(500).jsonp(erro))
      }
      // Com Query Parameter: anoCriacao e compositor
      else if (periodo == null && anoCriacao != null && compositor != null) {
            Obras.listar_ano_comp(anoCriacao, compositor)
                  .then(dados => res.jsonp(dados))
                  .catch(erro => res.status(500).jsonp(erro))
      }
      // Com todos os Query Parameters
      else if (periodo != null && anoCriacao != null && compositor != null) {
            Obras.listar_ano_per_comp(anoCriacao, periodo, compositor)
                  .then(dados => res.jsonp(dados))
                  .catch(erro => res.status(500).jsonp(erro))
      }
});

router.get('/compositores', function (req, res, next) {
      Obras.listar_compositores()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
});

router.get('/compositores/:compositor', function (req, res, next) {
      Obras.obras_comp(req.params.compositor)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;