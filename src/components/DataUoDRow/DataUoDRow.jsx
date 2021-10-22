import React from 'react';

// todo change 
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
            editLogData({...newExposureLog, hoursSleep: event.target.value})}
          ></input>
        </td>
        <td>
          <input
          required
          type='number'
          placeholder='Sleep Quality'
          value={newExposureLog.sleepQuality}
          onChange={ (event) =>
            editLogData({...newExposureLog, sleepQuality: event.target.value})}
          ></input>
        </td>
        <td>
          <input
          required
          type='number'
          placeholder='Start Lux Exposure'
          value={newExposureLog.startLux}
          onChange={ (event) =>
          log({...newExposureLog, startLux: event.target.value})}
          ></input>
        </td>
        <td>
          <input
          required
          type='number'
          placeholder='End Lux Exposure'
          value={newExposureLog.endLux}
          onChange={ (event) =>
          log({...newExposureLog, endLux: event.target.value})}
          ></input>
        </td>
        <td>
          <input
          required
          type='time'
          placeholder='Start Time of Exposure'
          value={newExposureLog.startTime}
          onChange={ (event) =>
          log({...newExposureLog, startTime: event.target.value})}
          ></input>
        </td>
        <td>
          <input
          required
          type='number'
          placeholder='Start Time of Exposure'
          value={newExposureLog.mood}
          onChange={ (event) =>
          log({...newExposureLog, mood: event.target.value})}
          ></input>
        </td>
        <td>
          <input
          required
          type='time'
          placeholder='Start Time of Exposure'
          value={newExposureLog.endTime}
          onChange={ (event) =>
          log({...newExposureLog, endTime: event.target.value})}
          ></input>
        </td>
    </tr>

    );
  }



export default DataUoDRow;