const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

// START SERVER
app.listen(process.env.PORT, () => {
  console.log(`listening on port: ${process.env.PORT}`);
});
