const router = require('express').Router();

const employeesController = require('../controller/employees')

router.get('/', employeesController.getEmployees)
router.get('/:id', employeesController.getEmployeeById)
router.get("/firstname/:first_name", employeesController.getEmployeeByFirstName)


module.exports = router;