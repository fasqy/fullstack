const express = require("express")
const mysql = require("mysql");
const app = express()
const cors = require("cors");

app.use(cors());

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    "database": "fullstack"
})

database.connect((err) => {
    if(err) console.error("Gagal koneksi:", err);
    console.log("Database connected"); 
})
//! Ambil semua data user
app.get("/api/v1/users", (req, res) => {
    console.log("GET API USER DI REQUEST");
    database.query("SELECT * FROM users", (err, rows) => {
        if(err) throw err;
        res.json({
            succes: true,
            message: "getting users data",
            data: rows,
        });
    });
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});