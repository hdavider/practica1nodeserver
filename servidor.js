let http = require('http');
let host = '127.0.0.1';
let puerto = '9000';

let servidor = http.createServer(function(llamado, respuesta) {
    respuesta.writeHead(200, {'Content-Type' : 'text/html'});
    respuesta.end('<h1>Hola Mundo!</h1>');
})

servidor.listen(puerto, host, function(){
    console.log('El servidor esta corriendo: ' + host + ":" + puerto)
})