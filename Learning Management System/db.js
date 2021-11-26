//rquire for mysql2
const mysql = require('mysql2/promise');


module.exports = db = {};

connection()

async function connection() {
    var dbconnection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "3amourisraa",
        database: "lmsdb",
        multipleStatements: true
    })

    db.connection = dbconnection;
}