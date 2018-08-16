var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var player = require('../../models/Player.js');

/* GET ALL Players */
router.get('/', function(req, res, next) {
  player.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Player BY ID */
router.get('/:id', function(req, res, next) {
  player.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Player */
router.post('/', function(req, res, next) {
  req.body.countRatings = 1;
  player.create(req.body, function (err, post) {
    if (err) return next(err);
        res.json(post);
  });
});

/* UPDATE Player */
router.put('/:id', function(req, res, next) {    
  player.findByIdAndUpdate(req.params.id, req.body,  function (err, post) {    
    if (err) return next(err);
    //player.setCountRating(req.body.countRatings);
    //player.setRating(req.body.rating);
    
    res.json(post);
  });
});

/* DELETE Player */
router.delete('/:id', function(req, res, next) {
  player.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;