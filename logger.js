'use strict';

// const fs = require('fs');
const net = require ('net');
// const util= require('util');

const client = new net.Socket();

client.connect(3001, 'localhost', () => {
  console.log('App connected to host logger');
});

client.on('data', (buffer) => {
  console.log(buffer.toString());
});
// server.on('connection', (socket) => {
//   socket.on('data', (buffer) => {
//     console.log(buffer.toString());
