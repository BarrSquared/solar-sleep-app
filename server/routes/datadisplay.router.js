// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();

// /**
//  * GET route template
//  */
// router.get('/', (req, res) => {
//   // GET route code here
// });

// /**
//  * POST route template
//  */
// router.post('/', (req, res) => {
//   // POST route code here
//   const hoursSleep = req.body.hoursSleep;
//   const sleepQuality = req.body.sleepQuality;
//   const startLux = req.body.startLux; 
//   const endLux = req.body.endLux; 
//   const startTime = req.body.startTime; 
//   const endTime = req.body.endTime; 
//   const mood = req.body.mood; 
//   const journalEntry = req.body.journalEntry;  

//   const queryText = `
// INSERT INTO "exposuredata" ("user_id", "hours_sleep", "sleep_quality", "start_lux_meter", "end_lux_meter", "start_lux_exposure_time", "end_lux_exposure_time", "mood_for_day", "journal_entry")
// VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
//   `;
//   pool.query(queryText, [hoursSleep, sleepQuality, startLux, endLux, startTime, endTime, mood, journalEntry])
//   .then(() => res.sendStatus(201))
//   .catch((err) => {
//       console.log('Error in router posting new log: ', err);
//       res.sendStatus(500);
//   });
// });

// module.exports = router;