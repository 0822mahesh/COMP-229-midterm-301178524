/**
 * File Name: index pages file
 * Name: Mahesh Kondragunta
 * Student Id:301178524
 * Webapp Name: books-app
 * 
 */

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
