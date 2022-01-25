// var http = require('http'); NÃO PRECISO MAIS DESSE HTTP PQ VOU CHAMAR OU ROUTER QUE JÁ TEM ESSE METODO
var router = require('./router');

var app = router(3412);

var contatos = [
	{id:1, nome: "Raul" , telefone: "9988-6655", data: new Date(), operadora: { nome: "Oi", codigo: "14", categoria: "Celular"}, },
	{id:2, nome: "Huber", telefone: "9988-5544", data: new Date(), operadora: { nome: "Claro", codigo: "31", categoria: "Celular"}, },
	{id:3, nome: "Thomas", telefone: "9922-3322", data: new Date(), operadora: { nome: "Vivo", codigo: "25", categoria: "Celular"}, }
];

var operadoras = [
	{ nome: "Oi", codigo: "14", categoria: "Celular", preco: 2},
	{ nome: "Claro", codigo: "31", categoria: "Celular", preco: 2 },
	{ nome: "Vivo", codigo: "25", categoria: "Celular", preco: 1 },
	{ nome: "Tim", codigo: "41", categoria: "Celular", preco: 2},
	{ nome: "GVT", codigo: "25", categoria: "Fixo", preco: 3 },
	{ nome: "Embratel", codigo: "21", categoria: "Fixo", preco: 1 }
];

app.interceptor(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.interceptor(function(req, res){
	res.setHeader('Content-Type', 'application/json;chrarset=UTF-8');
	next();
});

app.get('/contatos', function(req, res){
	res.write(JSON.stringify(contatos));
	res.end();
});

app.get('/operadoras', function(req, res){
	res.write(JSON.stringify(operadoras));
	res.end();
});

app.post('/contatos', function(req, res){
	var contato = req.body;
	contatos.push(JSON.parse(contato)); //(novoContato)
	res.end();
});

app.options('/contatos', function (req, res){
	res.end();
});

