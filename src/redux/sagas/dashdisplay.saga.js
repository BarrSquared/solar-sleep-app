import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchDashData(action) {
    try {
        console.log('Action from displayDashSaga. Action: ', action);
        const userDashData = yield axios.get('/api/dashdisplay');
        yield put({type: 'SET_DASHBOARD_TABLE', payload: userDashData.data});
    } catch(error) {
        console.log('Error in SETting user dashboard table, error: ', error);
    }
}

function* displayDashSaga() {
    // Saga listening for trigger to SET user data,
    // to be stored in state then appended to DOM
    yield takeLatest('SET_DASHBOARD_TABLE', fetchDashData);
}

export default displayDashSaga;