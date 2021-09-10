const net = require('net');
const client = net.createConnection({ port: 8124 });

process.stdin.on('data',(data) => {
    client.write(data);
}); 

client.on('data', (data) => {
    process.stdout.write(data)
});
