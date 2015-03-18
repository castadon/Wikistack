var express = require('express');
var router = express.Router();
var models = require('../models/');

/* GET home page. */
router.get('/', function(req, res) {
	models.Page.find(function(err,docs){
	res.render('index', { title: 'Wikistack', docs: docs });
		});
	});

router.get('/wiki/:url', function(req,res){
	var urlName = req.params.url;
	models.Page.findOne({url_name:urlName}, function(err,doc){
		res.render('show', {title: doc.title, body: doc.body, tags:doc.tags})
	});

});

router.post('/filter', function(req,res){
	var models = require('../models/');
	var filter = req.body.filter;
	models.Page.find({tags: filter}, function(err,docs){
		res.render('index', { title: 'Wikistack', docs: docs });
		});
	});

router.post('/modifyTags', function(req,res){
	var models = require('../models/');
	var title = req.body.title;
	var modification = req.body.changeTags.split(',');;
	models.Page.update({title:title},{tags:modification}, function(err,numAffected){
	res.redirect('/');
	})
})

router.get('/filter/:tag', function(req,res){
	var models = require('../models/');
	var filter = req.params.tag;
	models.Page.find({tags: filter}, function(err,docs){
		res.render('index', { title: 'Wikistack', docs: docs });
		});
})

	// var tags = req.body.pageTags
	// var url_name = 
  // STUDENT ASSIGNMENT:
  // add definitions of the `title`, `body` and `url_name` variables here

  
  
  // why is saving happening after redirecting sometimes? question to ask.


module.exports = router;
