const http = require('http');
const fs = require('fs');

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('¡Bienvenido a mi servidor Node.js!');
});

fs.appendFile('log.txt', 'El servidor se ejecutó correctamente\n', (err) => {
  if (err) throw err;
  console.log('Mensaje guardado en log.txt');
});

servidor.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});
