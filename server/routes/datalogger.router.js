const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();


/** 
 * DELETE route
 */

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const logId = req.params.id;
  const userId = req.user.id;
  console.log('In datalogger router delete, log id: ', logId);
  const queryText = `
  DELETE FROM "exposuredata" WHERE ("id" = $1);
  `;
  pool.query(queryText, [logId])
  .then((result) => {
    res.sendStatus(201);
  })
  .catch((err) => {
    console.log('Error in deleting log. Error: ', err);
    res.sendStatus(500);
  })
});

/**
 * PUT route template
 */
router.put('/:id', rejectUnauthenticated, (req, res) => {
  // PUT route code here
  // console.log('In PUT, req.body.logId: ', req.body.logId);
  console.log('In PUT, req.params.id: ', req.params.id);
  const userId = req.user.id;
  const logId = req.params.id;
  const hoursSleep = req.body.hoursSleep;
  const sleepQuality = req.body.sleepQuality;
  const startLux = req.body.startLux;
  const endLux = req.body.endLux;
  const exposureMinutes = req.body.exposureMinutes;
  const mood = req.body.mood;
  // // add query text, .pool, and .then
  const queryText = `
  UPDATE "exposuredata" SET ("hours_sleep", "sleep_quality", "start_lux_meter", "end_lux_meter", "exposure_time", "mood_for_day")
  = ($1, $2, $3, $4, $5, $6)
  WHERE "id" = $7;
  `;
  pool.query((queryText), [hoursSleep, sleepQuality, startLux, endLux, exposureMinutes, mood, logId])
  .then((response) => {
    res.sendStatus(201);
  }).catch((error) => {
    console.log('Error editing log id: ', logId);
    res.sendStatus(500);
  });
  });



/**
 * POST route template
 */
// if I need another kind of POST, 
// add '/newaddress' and in other files it would '/datalogger/newaddress'
router.post('/', (req, res) => { 
  // POST route code here, to post input data from datalogger page
//   console.log('WTF user id: ', req.user.id);
  const userId = req.user.id;
  const hoursSleep = req.body.hoursSleep;
  const sleepQuality = req.body.sleepQuality;
  const startLux = req.body.startLux; 
  const endLux = req.body.endLux; 
  const exposureMinutes = req.body.exposureMinutes; 
  const mood = req.body.mood;

  const queryText = `
INSERT INTO "exposuredata" ("user_id", "hours_sleep", "sleep_quality", "start_lux_meter", "end_lux_meter", "exposure_time", "mood_for_day")
VALUES ($1, $2, $3, $4, $5, $6, $7);
  `;                // user.id
  pool.query(queryText, [userId, hoursSleep, sleepQuality, startLux, endLux, exposureMinutes, mood])
  .then(() => res.sendStatus(201))
  .catch((err) => {
      console.log('Error in router posting new log: ', err);
      res.sendStatus(500);
  });
});

module.exports = router;