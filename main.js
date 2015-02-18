var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    meetupsController = require('./server/controllers/meetups-controller');

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.listen(2015, function() {
    console.log('I\'m listening... on port 2015');
});
