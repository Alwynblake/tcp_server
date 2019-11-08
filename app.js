'use strict';

const client = new net.Socket();
const events = ['write', 'read', 'update'];

client.connect(3001, 'localhost', () => {
  console.log('App connected to host');
});

setInterval( () => {
  let event = events[Math.floor(Math.random() * events.length)];
  // now send data to the server
  client.write(`${event} someone is trying to ${event}`);
}, 500);