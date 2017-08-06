const express = require('express');

const app = express();

module.exports = app;


app.get('/api', function (req, res){
  console.log('handeling by the API Router');
  res.send('Hello from the API');
});
