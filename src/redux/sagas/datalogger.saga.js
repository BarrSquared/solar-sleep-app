import { put, takeLatest } from 'redux-saga/effects';
// importing saga tools and axios to complete watcher function, put/dispatch to waters, and axios requests to server
import axios from 'axios';

// 
function* logNewData(action) {
    try {
        // testing to see what the action payload was
        // console.log('in saga.js, Action from dataLoggerSaga. Action: ', action);
        const newData = action.payload;
        // posting new user lux/sleep data to the server
        yield axios.post('/api/datalogger', newData);
        // after it posts to server, dispatching to set the dashboard table after db is updated
        yield put({type: 'FETCH_DASHBOARD_TABLE'}); 
    } catch(error) {
        // error log incase the signal is lost
        console.log('Error in posting new log', error);
    }
}


function* deleteCurrentLog(action) {
    // assigning payload to variables to use in axios put.
    const logId = action.payload.id;
    // testing to see what the action payload was
    // console.log('in saga.js, Action in deleteCurrentLog. logId: ', logId);
    // console.log('in saga.js, Action in deleteCurrentLog. Action: ', action);
    try {
        const logId = action.payload.id;
        // axios.delete, deleting log form the log id being pulled form the payload
        yield axios.delete(`/api/datalogger/${logId}`);
        // dispatching to a listener to set the dashboard table after the log has been deleted.
        yield put({ type: 'FETCH_DASHBOARD_TABLE' });
    } catch(error) {
        // error log incase the signal is lost
        console.log('Error deleting log, error: ', error);
    }
}


function* editCurrentLog(action) {
    try {
        console.log('in saga.js, Action in deleteCurrentLog. Action: ', action);
        // assigning payload to variables to use in axios put.
        const logId = action.payload.id;
        const logItem = action.payload;
        // axios.put, sending our action payload, as logItem to the url ending with current logId, pulled from payload
        yield axios.put(`/api/datalogger/${logId}`, logItem);
        // dispatching to a listener to set the dashboard table after the log has been updated.
        yield put({ type: 'FETCH_DASHBOARD_TABLE' });
        //should I add another fetch for 7 day and 30 day table?
    } catch(error) {
        // error log incase the signal is lost
        console.log('Error deleting log, error: ', error);
    }
}

function* dataLoggerSaga() {
    // Saga listening for dispatch to add new data
    yield takeLatest('ADD_NEW_LOG', logNewData);
    // Saga listening for dispatch to delete log
    yield takeLatest('DELETE_CURRENT_LOG', deleteCurrentLog);
    //  Saga listening for dispatch to edit log
    yield takeLatest('EDIT_CURRENT_LOG', editCurrentLog);
}

export default dataLoggerSaga;