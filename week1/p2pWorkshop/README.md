Challenge from https://mafintosh.github.io/p2p-workshop/build/01.html:

1 - Echo TCP server
===================

Write a TCP server that echoes whatever you write to it. For example if you write 'hello' to the TCP server, it should reply with 'hello', if you write 'world' it should reply 'world'

Also write a client that connects to this TCP server, writes `stdin` to the server and then prints the reply to `stdout`.

Tips
----

You can use the [net](https://nodejs.org/api/net.html) module to create TCP servers in node. Check the docs for the `createServer` function and you'll be on your way. Once you have a socket you can use the `.on('data' function(data) {...})` method to read data from it and the `.write(data)` method to write to it.

For the client you can also use the `net` module to connect to the server. Just like with the connection, you can use `process.stdin.on('data', ...)` to read from stdin and `process.stdout.write(data)` to write to stdout.

Testing
-------

Put your code into 2 files, one called "server.js", and the other "client.js". If you run

```
node server.js

```

and on another terminal

```
node client.js

```

when you type "hello" plus enter in the client console, you should get "hello" back on the same terminal.
