var socket = io();
socket.on('connect', function () {
  console.log('Connected to the server');

  socket.emit('createMessage', {
    to: 'Gvlvm',
    text: 'I love you so much'
  });

});


socket.on('newEmail', function (email){
  console.log(email);
});

socket.on('createMessage', function (message) {
  console.log('Client recieved the message -> ', message);
});

socket.on('newMessage', function (msg) {
  console.log('Client receives the message -> ', msg);
})

socket.on('disconnect', function () {
  console.log('Disconnected from the server ilyas');
});
