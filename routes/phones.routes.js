const express = require('express');
const router = express.Router();
const phonesController = require('../controllers/phones.controller');

router.get('/', phonesController.list);

module.exports = router;
