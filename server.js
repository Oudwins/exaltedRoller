const dotenv = require('dotenv');
const socketio = require('socket.io');

dotenv.config({ path: './config.env' });
const server = require('./app');
// ! Dice rolling utils
const diceRoller = require('./utils/diceRoller');
const formatRes = require('./utils/formatRes');
// color picker && future routes
const userController = require('./controllers/userController');

const io = socketio(server);

io.on('connection', (socket) => {
  socket.on('join', (user) => {
    console.log(user);
    if (
      io.of('/').sockets.size > process.env.MAX_ROOM_SIZE ||
      user.room !== 'sombras'
    )
      return io
        .to(socket.id)
        .emit('error', 'room is full please try again later.');
    // Join room
    socket.join(user.room);
    // generate && send color & new message
    user.color = userController.chooseMyColor(socket.id);
    io.to(socket.id).emit('color', user.color);
    io.to(user.room).emit('joined', formatRes(user, 'has joined.'));
  });

  socket.on('new_roll', (data) => {
    const newRoll = formatRes(data.user, diceRoller(data.nDice));
    io.to(data.user.room).emit('new_roll', newRoll);
  });

  socket.on('disconnect', () => {
    userController.freeMyColor(socket.id);
  });
});

// START SERVER
server.listen(process.env.PORT, () => {
  console.log(`listening on port: ${process.env.PORT}`);
});
