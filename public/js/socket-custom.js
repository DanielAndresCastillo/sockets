var socket = io(); //io es una función de socket, ponemos var porque no todos los navegadores soportan let

// ON =Escuchar 
socket.on('connect', function() {

    console.log('conectado al servidor');

});

// ON =Escuchar 
socket.on('disconnect', function() {
    console.log('Perdimos conexión al servidor');
});

// EMIT = Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Daniel',
    mensaje: 'Hola'
}, function(resp) {
    console.log('respuesta server', resp);
});


socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});