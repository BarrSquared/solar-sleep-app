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

function* deleteCurrentLog(action) {
    try {
        console.log('Action in deleteCurrentLog. Action: ', action);
        const logId = action.payload.id;
        const logDate = action.payload.date;
        yield axios.delete(`/api/datalogger/${logId}`);
        yield put({ type: 'FETCH_DASHBOARD_TABLE' });
    } catch(error) {
        console.log('Error deleting log, error: ', error);
    }
}

function* dataLoggerSaga() {
    // Saga listening for trigger to add new data
    yield takeLatest('ADD_NEW_LOG', logNewData);

    yield takeLatest('DELETE_CURRENT_LOG', deleteCurrentLog);
}

export default dataLoggerSaga;