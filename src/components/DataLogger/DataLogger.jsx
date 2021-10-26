import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is
// fix updated to datalogger
function DataLogger() {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  // const logToEdit = useSelector((store) => store.dashdisplayReducer);
  
  const [ newExposureLog, setNewExposureLog ] = useState({
    hoursSleep: 0, sleepQuality: 0, startLux: 0, endLux: 0, exposureMinutes: 0, mood: 0, 
  });
  
  const handelSubmit = (event) => {
    console.log('in handleSubmit trying to UPDATE, params.id: ', params.id);
    // console.log('in HS, params: ', params);
    event.preventDefault();
    if(params.id) {
      // if log exists, edit
      console.log('Edit');
      
      dispatch({ type: 'EDIT_CURRENT_LOG', payload: {...newExposureLog, id: params.id} });
    } else {
      // else add new log
      dispatch({ type: 'ADD_NEW_LOG', payload: newExposureLog });
    }

    // console.log('In DataLogger, clicking form submit');
    history.push("/dashboard");
  }

  const handelCancel = () => {
    history.push("/dashboard");
  }
  
    
  return (
    <div className="container">
      <h3>Data Logger</h3>
      <p></p>
      <p>Fill out form below to record today's lux exposure data and sleep quality metrics.</p>
      <p></p>
      <p>To update a previous log, make sure to have an accurate value in all fields!</p>
      <form onSubmit={handelSubmit}>
        <p>Approximate hours of sleep.</p>
        <input
        required
        type='number'
        placeholder='Hours of Sleep'
        value={newExposureLog.hoursSleep}
        onChange={ (event) =>
        setNewExposureLog({...newExposureLog, hoursSleep: event.target.value})}
        />
        <p>Rate your quality of sleep with a value from 1 to 5, 1 being the worst and 5 being the best.</p>
        <input
        required
        type='number'
        placeholder='Sleep Quality'
        value={newExposureLog.sleepQuality}
        onChange={ (event) =>
        setNewExposureLog({...newExposureLog, sleepQuality: event.target.value})}
        />
        <p>Record the lux meter reading from the START of your exposure.</p>
        <input
        required
        type='number'
        placeholder='Start Lux Exposure'
        value={newExposureLog.startLux}
        onChange={ (event) =>
        setNewExposureLog({...newExposureLog, startLux: event.target.value})}
        />
        <p>Record the lux meter reading from the END of your exposure.</p>
        <input
        required
        type='number'
        placeholder='End Lux Exposure'
        value={newExposureLog.endLux}
        onChange={ (event) =>
        setNewExposureLog({...newExposureLog, endLux: event.target.value})}
        />
        <p>Record the approximate minutes of exposure.</p>
        <input
        required
        type='number'
        placeholder='Minutes of Exposure'
        value={newExposureLog.exposureMinutes}
        onChange={ (event) =>
        setNewExposureLog({...newExposureLog, exposureMinutes: event.target.value})}
        />
         <p>Record your mood for the day on a scale from 1 to 5, with 1 being the worst and 5 being the best.</p>
        <input
        required
        type='number'
        placeholder='Mood for the day'
        value={newExposureLog.mood}
        onChange={ (event) =>
        setNewExposureLog({...newExposureLog, mood: event.target.value})}
        />

        <br />
        <button onClick={handelCancel}>Cancel</button>
        <button type="submit">Submit Daily Data Log</button>
      </form>
    </div>
  );
}

export default DataLogger;
