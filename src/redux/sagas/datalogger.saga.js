import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function logNewData(action) {
    try {
        console.log('Action from dataLoggerSaga. Action: ', action);
        const newData = action.payload;
        yield axios.post('/api/datadisplay', newData);
        yield put({type: 'SET_EXPOSURE_TABLE'});
    } catch(error) {
        console.log('Error in posting new log', error);
    }
}

function* dataLoggerSaga() {
    yield takeLatest('ADD_NEW_LOG', logNewData);
}

export default dataLoggerSaga;