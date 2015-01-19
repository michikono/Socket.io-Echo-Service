var io = require('socket.io')();
var middleware = require('socketio-wildcard')();

io.use(middleware);
io.on('connection', function(socket) {
  socket.on('*', function(msg){
    setTimeout(function() {
      console.log(new Date);
      console.log(msg);
      io.emit(msg.data[0], msg.data[1]);
    }, 1000)
  });
});


io.listen(3000);
