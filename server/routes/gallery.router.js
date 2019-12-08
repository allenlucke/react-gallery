const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

//New PUT Route
router.put('/likes/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const queryString = `UPDATE "react_gallery" SET "likes" = "likes" +1 WHERE "id"=$1;`; 
    pool.query(queryString, [galleryId])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
})

//New GET Route
router.get('/', (req, res) => {
    const queryString = `SELECT * FROM "react_gallery" ORDER BY "id" ASC;`;
    pool.query(queryString)
    .then((response) => {
        res.send(response.rows);
    })
    .catch((err) => {
        res.sendStatus(500);
    })
})

//POST Route
router.post('/', (req, res) => {
    const newItem = req.body;
    console.log(newItem)
    const queryString = `INSERT INTO "react_gallery" ("title", "path", "description")
                         VALUES('${newItem.title}', '${newItem.path}', '${newItem.description}');`;
    pool.query(queryString)
    .then((response) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        res.sendStatus(500);
    })  
});


module.exports = router;