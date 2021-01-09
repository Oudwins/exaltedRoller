const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const server = require('./app');

// START SERVER
server.listen(process.env.PORT, () => {
  console.log(`listening on port: ${process.env.PORT}`);
});
