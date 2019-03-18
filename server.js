'use strict';

var express = require('express');
var cors = require('cors');

// require and use "multer"...
const multer = require('multer');

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});

//start of my codes
const uploaded = multer({ dest: './uploads/' });
app.post("/api/fileanalyse", uploaded.single('upfile'), function(req, res) {
  const file = req.file;
  if (!file) {
    res.json({error: "Please upload a file!"});
  }
   res.json({name: file.originalname, type: file.mimetype, size: file.size, encoding: file.encoding});
});