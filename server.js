const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const server = require('./app');
const configureSocketIo = require('./sockets');

configureSocketIo(server);

// START SERVER
server.listen(process.env.PORT, () => {
  console.log(`listening on port: ${process.env.PORT}`);
});
