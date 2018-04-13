var express = require('express');

var app = express();

app.get('/', function(req, res) {
	console.log('Otrzymałem żądanie GET od strony głównej');
	res.send('Identyfikator, który został dopisany to: ');
});

app.post('/', function(req, res) {
	console.log('Otrzymałem rzadanie POST od strony głównej');
	res.send('Hello POST!');
});

app.delete('/del_user', function(req, res){
	console.log('Otrzymałem rządanie DELETE od strony /del_user');
	res.send('Hello DELETE');
});

app.get('/list_user', function(req, res){
	console.log('Otrzymałem rządanie GET od strony /list_user');
	res.send('Strona z listą użytkowników');
});

app.get('/ab*cd', function(req, res){
	conosle.log('Otrzymałem rządanie GET od strony /ab*cd');
	res.send('Wzór pasuje');
});

app.listen(3000);

app.use(function(req, res, next){
	res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego czego żądasz :-(')
});

