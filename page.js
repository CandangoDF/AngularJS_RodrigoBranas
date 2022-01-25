var http = require('http');

http.createServer(function (req, res) {
	res.write(
		'<html>' + 
			'<head>' + 
				'<title>Hello World</title>' + 
			'</head>' +
			'<body>' + 
				'<h1>Esta mensagem esta sendo enviada pelo servidor Node.js</h1>' +
			'</body>' + 
		'</html>'
	);
	res.end();//termina a resposta do server
}).listen(3412);