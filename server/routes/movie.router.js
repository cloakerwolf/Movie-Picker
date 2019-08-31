const express = require('express');
const pool = require('../modules/pool');
 const router = express.Router();

router.get('/', (req, res) =>{
    //return all movies
    const queryText = `SELECT * FROM "movies" ORDER BY "title" ASC;`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error in router.get in movie.router', error);
            res.sendStatus(500);
            
        });
});






 module.exports = router;