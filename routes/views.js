const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', '/views/index.html'));
});
router.get('/rooms', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', '/views/rooms.html'));
});

module.exports = {
  resourceURL: '/',
  router,
};
