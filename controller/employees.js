const mysql = require('mysql')
const pool = require('../mysql/connection') //update this folder location when its made



const getEmployees = (req, res) => {
  pool.query("SELECT * FROM employees LIMIT 50", (err, rows) => {
    // if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getEmployeeById = (req, res) => { 
  let sql = "SELECT * FROM employees WHERE emp_no = ?"
  let id = req.params.id
  sql = mysql.format(sql, [id])

  pool.query(sql, (err, rows) => {
    // if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getEmployeeByFirstName = (req, res) => {
  res.send("getting getEmployeeByFirstName")
}

module.exports = { getEmployees, getEmployeeById, getEmployeeByFirstName }