var express = require('express');
var app = express(),
bodyParser = require('body-parser');
const PORT = process.env.PORT || 7417


app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));




//ROutes
app.get('/', function (req, res) {
  res.render('index');
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));