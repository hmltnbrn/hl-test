"use strict";

let express = require('express'),
    compression = require('compression'),
    path = require('path'),
    app = express();

app.set('port', process.env.PORT || 8080); //sets port

app.use(compression());

app.use('/', express.static(__dirname + '/www'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

//Handle 404
app.use(function(req, res, next) {
  res.status(404).send('404: Not Found. You don\'t belong here.');
});

//Handle 500
app.use(function(err, req, res, next) {
  res.status(500).send('500: Internal Server Error');
});

//Handle Main Page
app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
