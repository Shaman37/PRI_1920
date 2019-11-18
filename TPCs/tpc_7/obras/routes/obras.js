const express = require('express');
const axios = require('axios');
const parse_url = require('parse-url');

var router = express.Router();

/* GET obras listing. */
router.get('/', function (req, res, next) {
   let query = ''
   if(parse_url(req.url).search != '') query = '?' + parse_url(req.url).search
   console.log(query)

   axios.get('http://localhost:3000/api/obras' + query)
      .then(dados => {
         lista = dados.data
         res.render('lista-obras', { lista: lista });
      })
      .catch(error => {
         res.render('error', { error: error });
      })
});

module.exports = router;