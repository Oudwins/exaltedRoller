const path = require('path');
const express = require('express');
const controller = require('../controllers/viewsController');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', '/views/index.html'));
});

module.exports = {
  resourceURL: '/',
  router,
};
