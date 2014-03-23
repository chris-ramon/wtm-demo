// $(document).ready(function() {
//
// // Place JavaScript code here...
//   var socket = io.connect(window.location.href);
//   socket.on('twitter-profile', function (data) {
//     addTwitter(data);
//     //console.log(data)
//     //socket.emit('respond', { message: 'Hello to you too, Mr.Server!' });
//   });
//
//   var addTwitter = function(data) {
//     $('#twitters').append("<div class='well'>"+JSON.stringify(data)+"</div>");
//   }
// });

var wtmApp = angular.module('wtmApp', ['ngRoute', 'btford.socket-io']);

wtmApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
    .otherwise({
        redirectTo: '/'
      });
  });

wtmApp.factory('socket', function (socketFactory) {
  return socketFactory();
});


wtmApp.controller('MainCtrl', function($scope, socket, $timeout) {
  $scope.twitters = [];
  //var socket = io.connect(window.location.href);
  socket.on('twitter-profile', function (data) {
    $scope.twitters.push(data);
  });

  // socket.emit('new-twitter-profile', {twitter: '@cramonn'});

  // $timeout(function(){ socket.emit('new-twitter-profile', {twitter: '@tenderlove'}); }, 3000);

  // var addTwitter = function(data) {
  //   $('#twitters').append("<div class='well'>"+JSON.stringify(data)+"</div>");
  // }
});
