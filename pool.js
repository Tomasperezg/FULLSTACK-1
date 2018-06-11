"use strict";
const pg = require("pg");

const pool = new pg.Pool({
    user:"postgres",
    password:"tomas",
    host: "localhost",
    port: 5432,
    database: "postgres",
});



module.exports = pool;
