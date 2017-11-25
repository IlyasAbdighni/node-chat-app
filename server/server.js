const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');



const publicPath = path.join(__dirname, '../public');
let PORT = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log("New user connected");

  socket.emit('newMessage', {
    from: 'Admin',
    text: 'Welcome to the chat app'
  });

  socket.broadcast.emit('newMessage', {
    from:'admin',
    text: 'New user joined',
    createdAt: new Date().getTime()
  });

  // socket.on('createEmail', (newEmail) => {
  //
  //   // io.emit('createEmail', {
  //   //   from: message.from,
  //   //   text: message.text,
  //   //   createdAt: new Date().getTime()
  //   // });
  //
  //   socket.broadcast.emit('newMessage', {
  //     from: message.from,
  //     text: message.text,
  //     createdAt: new Date().getTime()
  //   });
  //
  // });

  socket.on('newMessage', (message) => {
    socket.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
  });

  // socket.emit('createMessage', {
  //   to: 'Gvlvm',
  //   text: 'How are you'
  // });

  socket.on('disconnected', () => {
    console.log('User disconnected');
  });

})

server.listen(PORT, () => {
  console.log('server is running on port ', PORT);
});
