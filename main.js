let express = require('express');
let app = express();

let io = require('socket.io').listen(app.listen(8080));

io.sockets.on('connection', function (socket) {
    socket.emit('message', { datos: 'He recibido estos datos desde el servidor' });
    socket.on('send', function (data) {
        io.sockets.emit('message', {datos: data});
    });
});
