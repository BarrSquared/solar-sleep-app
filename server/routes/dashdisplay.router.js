const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
//todo: Should router.get('/) have /:id?
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
 * POST route template
 */
// router.post('/', (req, res) => {
//   // POST route code here
// });

module.exports = router;