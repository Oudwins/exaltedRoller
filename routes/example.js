const express = require('express');
const controller = require('../controllers/example');

const router = express.Router();

module.exports = {
  resourceURL: '/api/v1/example',
  router,
};
