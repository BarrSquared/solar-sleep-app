import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* displayDataDashSaga(action) {
    try {
        console.log('Action from displayDataSaga. Action: ', action);
        const displayData = action.payload;
        yield axios.get('/api/datadisplay', displayData);
    }
}

export default displayDataDashSaga;