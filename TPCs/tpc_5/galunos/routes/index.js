var express = require('express')
var jsonfile = require('jsonfile')

var router = express.Router()

var myBD = __dirname + '/../data/alunos.json'

/* GET home page. */

router.get('/', function(req, res) {
  jsonfile.readFile(myBD, (erro, dados) => {
    if (!erro) {
      res.render('index', {lista: dados})
    }
    else {
      res.render('error', {error: erro})
    }
  })
})

module.exports = router;