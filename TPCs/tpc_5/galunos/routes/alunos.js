var express = require('express');
var nanoid = require('nanoid');
var jsonfile = require('jsonfile');

var router = express.Router();

var myBD = __dirname + '/../data/alunos.json'

/* GET methods '/alunos/... */

/* Página de Registo */
router.get('/', function(req, res) {
    res.render('registar')
})

/* Página de Informações do Aluno */
router.get('/:id', function(req,res) {
    var id = req.params.id;
    jsonfile.readFile(myBD, (erro,alunos) => {
        if(!erro){
            var index = alunos.findIndex(a => a.id_aluno == id)
            if (index > -1){
                var aluno = alunos[index]
                res.render('aluno', {aluno: aluno})
            }
            else
                res.render('error') 
          }
    })
})

/* POST methods '/alunos/... */

/* Registar Aluno */
router.post('/', function(req, res) {
  var aluno = req.body  
  aluno['id_aluno'] = nanoid();
  aluno['notas'] = [];

  jsonfile.readFile(myBD, (erro, alunos) => {
      if (!erro) {
          alunos.push(aluno)
          jsonfile.writeFile(myBD, alunos, erro => {
              if (erro) console.log(erro);
              else console.log('Registo gravado com sucesso!');
          })
      }
      
      res.redirect('/')
    })
})

/* Registar nota de um Aluno */
router.post('/:id/notas', function(req,res) {
    var id = req.params.id
  
    jsonfile.readFile(myBD, (erro, alunos) => {
      if (!erro) {
        var index = alunos.findIndex(a => a.id_aluno == id)
        
        if (index > -1){
          var aluno = alunos[index]
          var nota = req.body
          aluno.notas.push(nota)

          jsonfile.writeFile(myBD, alunos, erro => {
            if (erro) console.log(erro)
            else console.log('Nota registada com sucesso')
          })
          
        }
      }
      else {
        res.render('error', { error: erro })
      }
      res.render('aluno',{aluno: aluno})
    }) 
 })
  
/* DELETE methods '/alunos/... */

/* Remover um Aluno */
router.delete('/:id', function(req, res) {
    var id = req.params.id;

    jsonfile.readFile(myBD, (erro,alunos) => {
        if(!erro){
            var index = alunos.findIndex(c => c.id_aluno == id)
            if (index > -1){
                alunos.splice(index,1)
                
                jsonfile.writeFile(myBD, alunos, erro => {
                    if (erro) console.log(erro)
                    else console.log("Compra removida!")
                })
            }
          }
        res.render('index', {lista: alunos})
    })
})

/* Remover nota de um Aluno */
router.delete('/:id/notas/:disciplina/:indicador', function(req,res){
    var id = req.params.id
    var disciplina = req.params.disciplina
    var indicador = req.params.indicador
    
    jsonfile.readFile(myBD, (erro, alunos) =>{
      var index = alunos.findIndex(a => a.id_aluno == id)

      if (!erro) {
        if (index > -1) {
          var aluno = alunos[index]
          var indexDisciplina = aluno.notas.findIndex(n => n.disciplina == disciplina)
          
          if(indexDisciplina > -1){
            var indexNota = aluno.notas.findIndex(n => n.indicador == indicador)
          
                if(indexNota > -1){
          
                    aluno.notas.splice(indexNota, 1)
                    jsonfile.writeFile(myBD, alunos, erro => {
                    
                        if (erro) console.log(erro)
                        else {
                            console.log('Nota removida com sucesso.')
                        }
                    })
                }
                else console.log('Nota inexistente!')
          }
          else console.log('Disciplina inexistente!')
        }
        else console.log('Aluno inexistente!')
      }
      else {
        res.render('error', { error: erro })
      }

      res.render('aluno', {aluno: aluno})
    })
  })
    

module.exports = router;
