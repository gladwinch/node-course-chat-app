const express =  require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

var app = express();

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New user connected');


  socket.on('createMessage', (message) => {
    console.log(message);
    io.emit('newMessage', {
      text:message.text,
      from:message.from,
      createdAt: new Date().getTime()
    })
  });

  socket.on('disconnect', () => {
    console.log("User disconnected by gladwin");
  });
} );

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
