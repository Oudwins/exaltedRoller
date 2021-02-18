import vm from './app';
import tooltips from './tooltips';
// !ON
// ! User Actions
function joinRoom(data) {
  vm.updateUser(data.user);
  window.history.replaceState(
    null,
    `D10 Roller - Room ${vm.getUser().room}`,
    `/rooms?room=${vm.getUser().room}&name=${vm.getUser().name}`
  );
  vm.setColor(data.user.color);
  vm.toggleLoading();
  vm.newMessage(data);
}

// created
vm.socket.on('roomCreated', joinRoom);
// You joined
vm.socket.on('youJoined', joinRoom);

// You changeColor
vm.socket.on('changeColor', (color) => {
  vm.setColor(color);
  vm.updateMessages({ color, userId: vm.getUser().id });
});

//! Others Actions
// Someone Joined
vm.socket.on('some1Joined', vm.newMessage);

vm.socket.on('new_roll', vm.newMessage);

// handling User Disconnects
vm.socket.on('userDisconnected', (data) => {
  // set color of messages of person who left to standard color
  const user = vm.updateMessages({ userId: data.id });
  vm.newMessage({ ...data, user });
  vm.socket.emit('colorReset', vm.getUser());
});

vm.socket.on('some1ChangeColor', (data) => {
  vm.updateMessages({ color: data.color, userId: data.id });
});

vm.socket.on('error', (data) => {
  console.log(data);
  /* window.location.href = window.location.origin; */
});

// !Connect & Disconnect
vm.socket.on('connect', () => {
  if (vm.getUser().creator) {
    vm.socket.emit('createRoom', vm.getUser());
  } else if (vm.getUser().room) {
    vm.socket.emit('join', vm.getUser());
  } else {
    /* window.location.href = window.location.origin; */
  }
});

vm.socket.on('disconnect', () => {
  vm.toggleLoading();
});

window.socket = vm.socket;
