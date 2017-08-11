const pg = require('pg');

const pool = new pg.Pool({
    user: 'postgres',
    password: 'khoapham',
    database: 'NODE1407',
    host: 'localhost',
    port: 5432,
    max: 20
});

function queryDb(sql, arrayData, cb) {
    pool.connect((err, client, done) => {
        if (err) return console.log(err.message);
        client.query(sql, arrayData, (errQuery, result) => {
            done(errQuery);
            // return result;
            cb(errQuery, result);
        });
    });
}

module.exports = queryDb;
