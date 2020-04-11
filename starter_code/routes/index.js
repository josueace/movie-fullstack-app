const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movies.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(allTheMoviesFromDB =>{
    let movies ={
      movie:allTheMoviesFromDB
    }
    res.render('movies',movies)
   // console.log({allTheMoviesFromDB})
  })
  .catch(err =>{
    console.log("Error hile getting movies form DB",err);
  })
});

router.get('/movies/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(theMovie => {
      console.log(theMovie);
      res.render('movie-details', { movie: theMovie });
    })
    .catch(error => {
      console.log('Error while retrieving book details: ', error);
    })
});



module.exports = router;
