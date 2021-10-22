import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// 
function* logNewData(action) {
    try {
        console.log('Action from dataLoggerSaga. Action: ', action);
        const newData = action.payload;
        // posting new user lux/sleep data to the server
        yield axios.post('/api/datalogger', newData);
        // after it goes to server, PUT to set the dashboard table after user inputs data
        yield put({type: 'FETCH_DASHBOARD_TABLE'}); 
    } catch(error) {
        console.log('Error in posting new log', error);
    }
}

// todo finish delete route
function* deleteCurrentLog(action) {
    const logId = action.payload.id;
    console.log('Action in deleteCurrentLog. logId: ', logId);
    console.log('Action in deleteCurrentLog. Action: ', action);
    // try {
    //     const logId = action.payload.id;
    //     yield axios.delete(`/api/datalogger/${logId}`);
    //     yield put({ type: 'FETCH_DASHBOARD_TABLE' });
    // } catch(error) {
    //     console.log('Error deleting log, error: ', error);
    // }
}

// todo finish PUT route
function* editCurrentLog(action) {
    try {
        console.log('Action in deleteCurrentLog. Action: ', action);
        const logId = action.payload.id;
        const logItem = action.payload;
        yield axios.put(`/api/datalogger/${logId}`);
        yield put({ type: 'FETCH_DASHBOARD_TABLE' });
        //should I add another fetch for 7 day and 30 day table?
    } catch(error) {
        console.log('Error deleting log, error: ', error);
    }
}

function* dataLoggerSaga() {
    // Saga listening for trigger to add new data
    yield takeLatest('ADD_NEW_LOG', logNewData);

    yield takeLatest('DELETE_CURRENT_LOG', deleteCurrentLog);

    yield takeLatest('EDIT_CURRENT_LOG', editCurrentLog);
}

export default dataLoggerSaga;