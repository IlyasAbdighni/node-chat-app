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

  var messsageBox = jQuery('[name=message]');

  socket.emit('newMessage', {
    from: 'Ilyas',
    text: messsageBox.val()
  }, function () {
    messsageBox.val('');
  });
});

var locationButton = jQuery('#send-location');
locationButton.on('click', function () {
  if (!navigator.geolocation) {
    return alert('Geolocation is not available by your browser');
  }
  navigator.geolocation.getCurrentPosition(function (location){
    console.log(location);
  }, function (){
    alert('Unable to fetch location.');
  })
});




socket.on('disconnect', function () {
  console.log('Disconnected from the server ilyas');
});
