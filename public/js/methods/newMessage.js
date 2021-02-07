import twoDigitify from './utils/TwoDigitify';

export default function (data) {
  const message = {
    user: { id: data.user.id, name: data.user.name, color: data.user.color },
    timeStamp: data.timeStamp,
  };
  if (data.data.nRolled !== undefined) {
    // its a die roll
    message.successes = twoDigitify(data.data.successes);
    message.fumbles = twoDigitify(data.data.fumbles);
    message.text = `Rolled ${twoDigitify(data.data.nRolled)}`;
    /* sort rolled */
    data.data.rolled.sort((a, b) => b - a);
    const rolls = data.data.rolled.map((el) => {
      if (el >= 7) return `<span class="r-success">${el}</span>`;
      if (el === 1) return `<span class="r-fumble">${el}</span>`;
      return `<span>${el}</span>`;
    });
    message.rolls = `[${rolls.join(',')}]`;
  } else {
    message.text = data.data;
  }
  this.messages.push(message);
}
