$(document).ready(function() {

// Place JavaScript code here...
  var socket = io.connect(window.location.href);
  socket.on('twitter-profile', function (data) {
    addTwitter(data);
    //socket.emit('respond', { message: 'Hello to you too, Mr.Server!' });
  });

  var addTwitter = function(data) {
    $('#twitters').append("<div class='well'>"+JSON.stringify(data)+"</div>");
  }
});
