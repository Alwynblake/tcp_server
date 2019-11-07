'use strict';

const fs = require('fs');
const net = require ('net');
const util= require('util');

const client = new net.Socket();

client.connect(3001, 'localhost', () => {
  console.log('App connected to host');
});

client.write('hello');

// client.on('data'), (buffer) => {
  // console.log(buffer.
// };


// const alterFile = (file) => {
//   fs.readFile( file, (err, data) => {
//     if(err) { throw err; }
//     let text = data.toString().toUpperCase();
//     fs.writeFile( file, Buffer.from(text), (err, data) => {
//       if(err) { throw err; }
//       console.log(`${file} saved`);
//     });
//   });
// };

// let file = process.argv.slice(2).shift();
// alterFile(file);

