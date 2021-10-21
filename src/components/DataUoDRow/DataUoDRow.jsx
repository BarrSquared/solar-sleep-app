import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';


const DataUoDRow = ({
  editLogData,
  handleEditLogChange,
  handleCancelClick,
}) =>{  
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
          placeholder='End Lux Exposure'
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