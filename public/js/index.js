import vm from './app';

// !ON
// joining
vm.socket.on('joined', (data) => {
  vm.toggleLoading();
  vm.newMessage(data);
});
vm.socket.on('color', (data) => {
  vm.setColor(data);
});

vm.socket.on('new_roll', (data) => {
  vm.newMessage(data);
});

// !EMIT
if (vm.getUser().room) vm.socket.emit('join', vm.getUser());
