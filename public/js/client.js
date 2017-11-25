var socket = io();
socket.on('connect', function () {
  console.log('Connected to the server');

});


// socket.on('newEmail', function (email){
//   console.log(email);
// });
//
// socket.on('createMessage', function (message) {
//   console.log('Client recieved the message -> ', message);
// });
//
// socket.emit('createMessage', {
//   to: 'Gvlvm',
//   text: 'I miss you'
// });
//
// socket.on('newMessage', function (msg) {
//   console.log('Client receives the message -> ', msg);
// })

socket.on('newMessage', function(message) {
  console.log('new message from server');
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#show-messages').append(li);
})

jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();
  socket.emit('newMessage', {
    from: 'Ilyas',
    text: jQuery('[name=message]').val()
  }, function () {

  });
});




socket.on('disconnect', function () {
  console.log('Disconnected from the server ilyas');
});
