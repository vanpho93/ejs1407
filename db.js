const pg = require('pg');

const pool = new pg.Pool({
    user: 'postgres',
    password: 'khoapham',
    database: 'NODE1407',
    host: 'localhost',
    port: 5432,
    max: 3
});

function queryDb(sql, cb) {
    pool.connect((err, client, done) => {
        if (err) return console.log(err.message);
        client.query(sql, (errQuery, result) => {
            // done(errQuery);
            // return result;
            cb(errQuery, result);
        });
    });
}

module.exports = queryDb;
