const mysql = require('mysql')
require('dotenv').config()

const host = process.env.HOST
const username = process.env.USERNAME
const password = process.env.PASSWORD
const database = process.env.DATABASE

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      console.log(host, username, password, database)
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: host,
        user: username,
        password: password,
        database: database
      })
      console.log("success")
      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;