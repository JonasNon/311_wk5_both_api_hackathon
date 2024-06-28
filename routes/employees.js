const router = require('express').Router();

const employeesController = require('../controller/employees')

router.get('/', employeesController.getEmployees)

module.exports = router;