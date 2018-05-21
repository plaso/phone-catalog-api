const express = require('express');
const router = express.Router();
const phonesController = require('../controllers/phones.controller');

router.get('/', phonesController.list);
router.post('/', phonesController.create);
router.get('/:id', phonesController.get);

module.exports = router;
