const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Servidor funcionando correctamente 🚀');
  res.end();
});

server.listen(4000, () => {
  console.log('Servidor en puerto 4000');
});
