Challenges from https://mafintosh.github.io/p2p-workshop/build/02.html

2 - Minimal chat server.
========================

Write a server that sends whatever data it receives through the socket to all the clients connected to it except the one who sent said message. For example if you have A, B and C connected to the server and B sends 'hello' to the server, A and C should get 'hello' printed on their screen but B should not.

You can reuse the client from the previous problem for this one.

Tips
----

This is a working client from problem 1.

```
var net = require('net')
var socket = net.connect(10000, 'localhost')

process.stdin.on('data', function (data) {
  socket.write(data)
})

socket.on('data', function (data) {
  process.stdout.write(data)
})

```

You can reuse this client for this problem. You can also base the server for this problem on the server from problem 1.

```
var net = require('net')

var server = net.createServer(function (socket) {
  console.log('new connection')
  socket.on('data', function (data) {
    socket.write(data)
  })
})

server.listen(10000)

```

The difference in this case is that you are going to have to keep track of different connections to the server, and also keep track of clients that disconnect from the server.

Luckily there is a module on npm called [stream-set](https://github.com/mafintosh/stream-set). It keeps track of a list of streams and remove streams from the list as they become `closed`. TCP sockets in node, are also streams, so you can use this module to keep track of the connections to your server.

Now, all you need to do is write the message received from one client to the reminder of clients.

Testing
-------

Open a terminal and run

```
node server.js

```

Open 3 more terminals and in each terminal run

```
node client.js

```

If you write messages from any of the client terminals, the other clients should get the messages.
