const dayjs = require('dayjs');

module.exports = (data, user, fullUser = false) => {
  const time = dayjs().format('HH:mm:ss');
  const newUser = fullUser
    ? user
    : { name: user.name, color: user.color, id: user.id };
  return {
    user: newUser,
    timeStamp: time,
    data,
  };
};
