const dayjs = require('dayjs');

module.exports = (user, data) => {
  const time = dayjs().format('HH:mm:ss');
  return {
    user,
    timeStamp: time,
    data,
  };
};
