'use strict';

const net = require('net');
const port = process.env.PORT || 3001;
const server = net.createServer();

server.listen(port, () => {
  console.log(`TCP Server up on ::: ${port}`)
});

const sockets = [];

server.on('connection', (socket) => {
  sockets.push(socket);
  socket.on('data', (buffer) => {
    console.log(buffer.toString());
    // for loop  to iterate through the buffer. each socket is converted to a string
    for(let socket of sockets) {
      socket.write(buffer.toString());
    }
  })
});

// let socketPool = {};

// server.on('connection', (socket) => {
//   const id = `Socket-${Math.random()}`;
//   socketPool[id] = socket;
//   socket.on('data', (buffer) => dispatchEvent(buffer));
//   socket.on('close', () => {
//     delete socketPool[id];
//   });
// });
//
// let dispatchEvent = (buffer) => {
//   let text = buffer.toString().trim();
//   for (let socket in socketPool) {
//     socketPool[socket].write(`${event} ${text}`);
//   }
// };

