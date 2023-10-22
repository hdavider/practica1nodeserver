let http = require('http');
let host = '127.0.0.1';
let puerto = '9000';

const nombre = 'Hugo Erazo';
const areasConocimiento = ['Programacion', 'Soporte Tecnico'];

let servidor = http.createServer(function (llamado, respuesta) {
  respuesta.writeHead(200, { 'Content-Type': 'text/html' });
  respuesta.write('<h1>Hola Mundo otra vez!</h1>');
  respuesta.write(`<p>Mi nombre es ${nombre}</p>`);
  respuesta.write('<p>Areas de conocimiento:</p>');
  respuesta.write('<ul>');
  areasConocimiento.forEach((area) => {
    respuesta.write(`<li>${area}</li>`);
  });
  respuesta.write('</ul>');
  respuesta.end();
});

servidor.listen(puerto, host, function(){
    console.log('El servidor esta corriendo: ' + host + ":" + puerto)
})