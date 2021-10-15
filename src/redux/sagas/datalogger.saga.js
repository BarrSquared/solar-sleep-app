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
        yield put({type: 'SET_DASHBOARD_TABLE'}); 
    } catch(error) {
        console.log('Error in posting new log', error);
    }
}

function* dataLoggerSaga() {
    // Saga listening for trigger to add new data
    yield takeLatest('ADD_NEW_LOG', logNewData);
}

export default dataLoggerSaga;