const socketio = require('socket.io');
// ! Dice rolling utils
const diceRoller = require('./utils/diceRoller');
const formatRes = require('./utils/formatRes');
const setColor = require('./utils/setColor');
// generate room string
const generateRoomString = require('./utils/generateString');

module.exports = (server) => {
  const io = socketio(server);

  io.on('connection', (socket) => {
    socket.on('createRoom', async (user) => {
      async function findEmpty() {
        const room = generateRoomString(6);
        // returns a set
        const ids = await io.in(room).allSockets();
        if (ids.size > 0) {
          return findEmpty();
        }
        return room;
      }
      const room = await findEmpty();
      // JOIN ROOM
      socket.join(room);
      // add room and color to user
      user.room = room;
      user.color = setColor(0);
      io.to(socket.id).emit(
        'roomCreated',
        formatRes(`has created ${room}`, user, true)
      );
    });

    socket.on('join', async (user) => {
      const clientsInRoom = await io.in(user.room).allSockets();
      if (
        clientsInRoom.size === 0 ||
        clientsInRoom.size > process.env.MAX_ROOM_SIZE
      )
        return io.to(socket.id).emit(
          'error',
          `Cannot Join Room please try again later. Max Room size is 
              ${process.env.MAX_ROOM_SIZE}`
        );
      console.log(clientsInRoom);
      socket.join(user.room);
      user.color = setColor(clientsInRoom.size);
      user.id = socket.id;
      // Send to all clients except sender
      io.to(socket.id).emit(
        'youJoined',
        formatRes('has connected.', user, true)
      );
      socket
        .to(user.room)
        .emit('some1Joined', formatRes('has connected.', user));
    });

    socket.on('reconnect', () => {
      console.log('user Reconected');
    });

    socket.on('new_roll', (data) => {
      const newRoll = formatRes(diceRoller(data.nDice), data.user);
      io.to(data.user.room).emit('new_roll', newRoll);
    });

    socket.on('colorReset', async (user) => {
      const socketsInRoom = await io.in(user.room).allSockets();
      const arrSocketsInRoom = Array.from(socketsInRoom);
      const color = setColor(
        arrSocketsInRoom.findIndex((id) => id === socket.id)
      );
      io.to(user.id).emit('changeColor', color);
      socket.to(user.room).emit('newColor', { id: socket.id, color });
    });

    socket.on('disconnecting', () => {
      const room = Array.from(socket.rooms)[1];
      if (room)
        io.to(room).emit(
          'userDisconnected',
          formatRes('has disconnected', { id: socket.id })
        );
    });
  });
};
