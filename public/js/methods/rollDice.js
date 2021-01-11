export default function (e) {
  const nDice = e.target.dataset.value;
  this.socket.emit('new_roll', {
    user: this.getUser(),
    nDice,
  });
}
