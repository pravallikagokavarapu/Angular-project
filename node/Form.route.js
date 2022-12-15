const express = require('express');
const FormController = require('../Form.Controller');
const router = express.Router();

//Get a form by Id
router.get('/', FormController.getForm);

//save a new form
router.post('/', FormController.submitForm);

module.exports = router;
