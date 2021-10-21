import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


function DataUoDRow() {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentEntry = useSelector((store) => store.dashdisplayReducer);
    
    //todo add var for current exposure.id based on id clicked from dash
    const [ newExposureLog, setNewExposureLog ] = useState({
      hoursSleep: 0, sleepQuality: 0, startLux: 0, endLux: 0, exposureMinutes: 0, mood: 0, journalEntry: '',  
    });
    

  
    // const handelCancel = () => {
      
    // }

    // const handleDelete = () => {
    //     console.log('Clicking delete in DataUoD');
    // }
    
      
    return (
      <tr>
        <td>
          <input
          required
          type='number'
          placeholder='Hours of Sleep'
          value={newExposureLog.hoursSleep}
          onChange={ (event) =>
          setNewExposureLog({...newExposureLog, hoursSleep: event.target.value})}
          ></input>
        </td>
        <td>
          <input
          required
          type='number'
          placeholder='Sleep Quality'
          value={newExposureLog.sleepQuality}
          onChange={ (event) =>
          setNewExposureLog({...newExposureLog, sleepQuality: event.target.value})}
          ></input>
        </td>
        <td>
          <input
          required
          type='number'
          placeholder='Start Lux Exposure'
          value={newExposureLog.startLux}
          onChange={ (event) =>
          setNewExposureLog({...newExposureLog, startLux: event.target.value})}
          ></input>
        </td>
        <td>
          <input
          required
          type='number'
          placeholder='Start Lux Exposure'
          value={newExposureLog.endLux}
          onChange={ (event) =>
          setNewExposureLog({...newExposureLog, endLux: event.target.value})}
          ></input>
        </td>
        <td>
          <input
          required
          type='time'
          placeholder='Start Time of Exposure'
          value={newExposureLog.startTime}
          onChange={ (event) =>
          setNewExposureLog({...newExposureLog, startTime: event.target.value})}
          ></input>
        </td>
        <td>
          <input
          required
          type='time'
          placeholder='Start Time of Exposure'
          value={newExposureLog.endTime}
          onChange={ (event) =>
          setNewExposureLog({...newExposureLog, endTime: event.target.value})}
          ></input>
        </td>
        <td>
          <input
          required
          type='number'
          placeholder='Start Time of Exposure'
          value={newExposureLog.mood}
          onChange={ (event) =>
          setNewExposureLog({...newExposureLog, mood: event.target.value})}
          ></input>
        </td>
        <td>
          <input
          required
          type='text'
          placeholder='250 Character Limit'
          value={newExposureLog.journalEntry}
          onChange={ (event) =>
          setNewExposureLog({...newExposureLog, journalEntry: event.target.value})}
          ></input>
        </td>
    </tr>

    );
  }
  


export default DataUoDRow;