import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* displayDashSaga(action) {
    try {
        console.log('Action from displayDashSaga. Action: ', action);
        const displayData = action.payload;
        yield axios.get('/api/displaydash', displayData);
    }
}

export default displayDashSaga;