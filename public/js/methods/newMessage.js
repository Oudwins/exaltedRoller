export default function (data) {
  const message = {
    user: data.user,
    timeStamp: data.timeStamp,
  };
  if (data.data.nRolled !== undefined) {
    // its a die roll
    message.successes = data.data.successes;
    message.fumbles = data.data.fumbles;
    message.text = `Rolled ${data.data.nRolled}`;
  } else {
    message.text = data.data;
  }
  this.messages.push(message);
}
