var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let id = req.params.id 

  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/' + id + '?info=completa&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
    .then(dados => {
      tipologia = dados.data;
      res.render('tipologia', {tipologia: tipologia});
    })
    .catch(error => {
      res.render('error', { error: error });
    })
});

module.exports = router;
