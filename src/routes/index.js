const express = require('express');
const customersController = require('../controllers/customers');

const router = express.Router();

router.get('/api/customers', customersController.index);
router.get('/api/customers/:id', customersController.getCustomerById);
router.delete('/api/customers/:id', customersController.deleteCustomerById);
router.put('/api/customers/:id', customersController.updateCustomerById);
router.post('/api/customers', customersController.saveCustomer);

module.exports = router;
