const mysql = require('mysql')
const pool = require('../mysql/connection') //update this folder location when its made

const getEmployees = (req, res) => {
  pool.query("SELECT * FROM employees LIMIT 50", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getEmployeeById = (req, res) => { 
  let sql = "SELECT * FROM employees WHERE emp_no = ?"
  let id = req.params.id
  sql = mysql.format(sql, [id])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getEmployeeSalaries = (req, res) => {
    pool.query("SELECT employees.first_name, employees.last_name, salaries.salary FROM employees INNER JOIN salaries ON employees.emp_no = salaries.emp_no LIMIT 50", (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows);
      }
    );
}



module.exports = { getEmployees, getEmployeeById, getEmployeeSalaries }