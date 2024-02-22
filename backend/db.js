const mysql = require('mysql2');

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pets'
});

dbConnection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});
