const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const apiRouter = require('./api/apiRouter.js');

var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));

// Log requests to the console.
app.use(logger('dev'));

app.use(apiRouter);

const PORT = process.env.PORT || 8000;

console.log(PORT);


// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(PORT, function () {
  console.log('Character Scramble listening on port ' + PORT);
});
