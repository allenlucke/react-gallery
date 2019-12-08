//Imports postgreSQL
const pg = require('pg');
const Pool = pg.Pool;
//Tells pool what database
const pool = new Pool ({
    database: "react-gallery",
    host: "localhost",
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('connect', ()=>{
    console.log('connected!');
});

pool.on('error', (error) => {
    console.log(`err:  ${error}`);
});

// Exports database
module.exports = pool;