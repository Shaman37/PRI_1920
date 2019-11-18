const express = require('express');
const axios = require('axios');

var router = express.Router();

/* GET obras listing. */
router.get('/', function (req, res, next) {
   axios.get('http://localhost:3000/api/compositores')
      .then(dados => {
        lista = dados.data;
         res.render('lista-compositores', { lista: lista });
      })
      .catch(error => {
         res.render('error', { error: error });
      })
});

module.exports = router;