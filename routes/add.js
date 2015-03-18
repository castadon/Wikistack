var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req,res){
	res.render('add_page')
});

router.post('/submit', function(req,res){
	var models = require('../models/');
	var title = req.body.pageTitle;
	var body = req.body.pageContent;
	var tags = (req.body.pageTags).split(',');
	// var tags = req.body.pageTags;
	var url_name= generateUrlName(title);
	// var url_name = 
  // STUDENT ASSIGNMENT:
  // add definitions of the `title`, `body` and `url_name` variables here

  var p = new models.Page({ "title": title, "body":body, "url_name":url_name, "tags":tags });
  p.save();
  res.redirect('/');
  // why is saving happening after redirecting sometimes? question to ask.
});



module.exports = router;


	var generateUrlName = function(name) {
  if (typeof name != "undefined" && name !== "") {
    // Removes all non-alphanumeric characters from name
    // And make spaces underscore
    return name.replace(/\s/ig,"_").replace(/\W/ig,"");
  } else {
    // Generates random 5 letter string
    return Math.random().toString(36).substring(2,7);
  }
};
