const express = require('express');
const notfoundController = require('../controllers/notfound');

const router = express.Router();

router.get('*', notfoundController.index);
router.put('*', notfoundController.index);
router.delete('*', notfoundController.index);
router.post('*', notfoundController.index);

module.exports = router;
