const net = require('net');
const server = net.createServer((c) => {
  c.on('data',(data) => {
      c.write(data);
  });
});

server.listen(8124);