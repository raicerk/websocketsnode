let express = require('express');
let io = require('socket.io');

let app = express();

app.get('/saludo', function(req, res){
	res.send('Hola mundo');
});

app.listen(8080);
console.log(`Servidor funcionando en http://localhost:8080`);
