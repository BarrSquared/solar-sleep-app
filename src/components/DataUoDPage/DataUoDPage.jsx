import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


function DataUoDPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentEntry = useSelector((store) => store.dashdisplayReducer);
    
    const [ newExposureLog, setNewExposureLog ] = useState({
      hoursSleep: 0, sleepQuality: 0, startLux: 0, endLux: 0, startTime: '', endTime: '', mood: 0, journalEntry: '',  
    });
    
    const handelSubmit = (event) => {
      event.preventDefault();
      // should I add a spread operator here?
      dispatch({ type: 'ADD_NEW_LOG', payload: newExposureLog });
      // console.log('In DataLogger, clicking form submit');
    }
  
    const handelCancel = () => {
      history.push("/dashboard");
    }

    const handleDelete = () => {
        console.log('Clicking delete in DataUoD');
    }
    
      
    return (
      <div className="container">
        <h3>Update Or Delete Data</h3>
        <p></p>
        <button onClick={handleDelete}>Delete entire Log for this day</button>

        <p> </p>
        <form onSubmit={handelSubmit}>
          <p>The current approximate hours of sleep for this date are: ??? . Leave blank or enter new data below. </p>
          <input
          required
          type='number'
          placeholder='Hours of Sleep'
          value={newExposureLog.hoursSleep}
          onChange={ (event) =>
          setNewExposureLog({...newExposureLog, hoursSleep: event.target.value})}
          />
          <p>The current quality of sleep rating is: ??? . Leave blank or enter new data below</p>
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
          placeholder='Start Lux Exposure'
          value={newExposureLog.endLux}
          onChange={ (event) =>
          setNewExposureLog({...newExposureLog, endLux: event.target.value})}
          />
          <p>Record the START time of your exposure to nearest minute.</p>
          <input
          required
          type='time'
          placeholder='Start Time of Exposure'
          value={newExposureLog.startTime}
          onChange={ (event) =>
          setNewExposureLog({...newExposureLog, startTime: event.target.value})}
          />
          <p>Record the END time of your exposure to nearest minute.</p>
          <input
          required
          type='time'
          placeholder='Start Time of Exposure'
          value={newExposureLog.endTime}
          onChange={ (event) =>
          setNewExposureLog({...newExposureLog, endTime: event.target.value})}
          />
           <p>Record your mood for the day on a scale from 1 to 5, with 1 being the worst and 5 being the best.</p>
          <input
          required
          type='number'
          placeholder='Start Time of Exposure'
          value={newExposureLog.mood}
          onChange={ (event) =>
          setNewExposureLog({...newExposureLog, mood: event.target.value})}
          />
          <p>Optional journal entry for how you felt about your sleep or mood throughout the day.</p>
          <input
          required
          type='text'
          placeholder='250 Character Limit'
          value={newExposureLog.journalEntry}
          onChange={ (event) =>
          setNewExposureLog({...newExposureLog, journalEntry: event.target.value})}
          />
  
          <br />
          <button onClick={handelCancel}>Cancel</button>
          <button type="submit">Submit Daily Data Log</button>
        </form>
      </div>
    );
  }
  


export default DataUoDPage;