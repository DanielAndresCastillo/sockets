const express = require('express');
const sokectIO = require('socket.io');
const http = require('http');


const path = require('path');

//Hay que configurar, ya que socket no trabaja directametne sobre express
const app = express();
let server = http.createServer(app);



const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//InputsOutput = esta es la comunicacion del backend
module.exports.io = sokectIO(server);
require('./sockets/socket')



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});