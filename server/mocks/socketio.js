/* eslint-env node */

module.exports = function() {
  var io = require('socket.io')(7101);

  io.on('connection', function (socket) {
    console.log('Connection made on socketIO'); // eslint-disable-line no-console

    socket.send('sadad');
    socket.on('message', function () { });
    socket.on('disconnect', function () { });
  });
};
