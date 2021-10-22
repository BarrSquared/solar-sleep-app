const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */


//todo: Should router.get('/) have /:id?
//todo route for a month's worth of data to dash table
// router.get('/30', rejectUnauthenticated, (req, res) => {
//   // GET route code here
//   console.log('In dashdisplay router GET.');
//   console.log('In display GET, req.user: ', req.user.id);
//   const userId = req.user.id;
//   const queryText = `
//     SELECT * FROM "exposuredata" WHERE "user_id" = $1
//     ORDER BY "date" DESC
//     LIMIT 30;
//   `;
//   pool.query(queryText, [userId])
//     .then((results) => res.send(results.rows))
//     .catch((error) => {
//         console.log('Error making SELECT for user dashboard table: ', error);
//         res.sendStatus(500);
//     })
// });

//todo Route for a week's worth of data to dash table
// fix change / tag, ask question to C
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  console.log('In dashdisplay router GET.');
  console.log('In display GET, req.user: ', req.user.id);
  const userId = req.user.id;
  const queryText = `
    SELECT * FROM "exposuredata" WHERE "user_id" = $1
    ORDER BY "date" DESC
    LIMIT 30;
  `;
  pool.query(queryText, [userId])
    .then((results) => res.send(results.rows))
    .catch((error) => {
        console.log('Error making SELECT for user dashboard table: ', error);
        res.sendStatus(500);
    })
});

/**
 * DELETE route, need id for specific data to delete? 
 *              how to set url correctly?
 * OR use route in datalogger router?
 */
// router.delete('/', (req, res) => {
//   // delete route code here

// });

/**
 * PUT route, need id for specific data to replace?
 *              how to set url correctly?
 *  OR use route in datalogger router?
 * 
 */
// router.put('/', (req, res) => {
//   // POST route code here
// });

module.exports = router;