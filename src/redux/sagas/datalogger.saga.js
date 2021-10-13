import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function logNewData(action) {
    try {
        console.log('Action from dataLoggerSaga. Action: ', action);
        const newData = action.payload;
        yield axios.post('/api/postdata')
    }
}

function* dataLoggerSaga() {
    yield takeLatest('ADD_NEW_LOG', logNewData);
}

export default dataLoggerSaga;