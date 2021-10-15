import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* displayDash(action) {
    try {
        console.log('Action from displayDashSaga. Action: ', action);
        const displayData = action.payload;
        yield axios.get('/api/displaydash', displayData);
    } catch(error) {
        console.log('Error in SETting user dashboard table, error: ', error);
    }
}

function* displayDashSaga() {
    // Saga listening for trigger to SET user data,
    // to be stored in state then appended to DOM
    yield takeLatest('SET_DASHBOARD_TABLE', displayDash);
}

export default displayDashSaga;