const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    //return all movies
    let queryText = //`SELECT * FROM "movies" ORDER BY "title" ASC;`;
        `SELECT "movies".id, "movies".poster, "movies".title, array_agg("genres".name) AS "movie_genres", "movies".description
        FROM "movies"
        JOIN "movies_genres" ON "movies_genres".movies_id = "movies".id
        JOIN "genres" ON "movies_genres".genres_id = "genres".id
        GROUP BY "movies".id
        ORDER BY "movies".id;`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error in router.get in movie.router', error);
            res.sendStatus(500);

        });
});



router.get('/genre/:id', (req, res) => {
    //return movie for specific id with genre
    let id = req.params.id;
    let queryText = //`SELECT * FROM "movies" ORDER BY "title" ASC;`;
        `SELECT "movies".id, poster, title, array_agg("genres".name) AS "genres", description
        FROM "movies"
        JOIN "movies_genres" ON "movies_genres".movies_id = "movies".id
        JOIN "genres" ON "movies_genres".genres_id = "genres".id
        Where "movies".id = $1
        GROUP BY "movies".id;`;
    pool.query(queryText, [id])
        .then((result) => {
            console.log('Success GET from specific movie router');
            res.send(result.rows[0]);
        })
        .catch((error) => {
            console.log('Error in GET in specific movie router', error);
            res.sendStatus(500);

        });
});





module.exports = router;