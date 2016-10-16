var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/pancake', function (req, res) {
  res.send('pancake');
});

app.get('/hello/:id', function(req, res) {
    return res.send('Hello ' + req.params.id);

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});