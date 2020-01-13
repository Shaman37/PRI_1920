var express = require('express');
var axios = require('axios');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
    .then(dados => {
      lista = dados.data;
      res.render('index', { lista: lista });
    })
    .catch(error => {
      res.render('error', { error: error });
    })
});

module.exports = router;
