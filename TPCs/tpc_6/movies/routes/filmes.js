const express = require('express');
const axios = require('axios');
const movieInfo = require('movie-info');

var router = express.Router();

/* GET student listing. */
router.get('/', function (req, res, next) {
   axios.get('http://localhost:3000/api/filmes')
      .then(dados => {
         lista = dados.data.slice(0, 20);
         res.render('lista-filmes', { lista: lista });
      })
      .catch(error => {
         res.render('error', { error: error });
      })
});

router.get('/inserir', function (req, res, next) {
   res.render('inserir');
});

router.get('/:id', function (req, res) {
   axios.get('http://localhost:3000/api/filmes/' + req.params.id)
      .then(dados => {
         let filme = dados.data
         movieInfo(filme.title)
            .then(response => {
               let imageUrl = response.imageBase + response.poster_path;
               let overview = response.overview;
               let releaseDate = response.release_date;
               let votes = response.vote_count;
               let rating = response.vote_average;

               console.log(response)

               res.render('filme', { 
                  filme: filme, 
                  poster: imageUrl, 
                  plot: overview, 
                  release_date: releaseDate,
                  rating: rating,
                  total_votes: votes})
            })

      })
      .catch(error => {
         res.render('error', { error: error });
      })
});

router.post('/', function (req, res) {
   axios.post('http://localhost:3000/api/filmes/', req.body)
      .then(dados => {
         res.redirect('/filmes')
      })
      .catch(erro => {
         res.render('error', { error: erro })
      })
});

router.delete('/:id', function (req, res, next) {
   axios.delete('http://localhost:3000/api/filmes/' + req.params.id)
      .then(dados => {
         res.redirect(303, '/')
      })
      .catch(erro => {
         res.render('error', { error: erro })
      })
});

module.exports = router