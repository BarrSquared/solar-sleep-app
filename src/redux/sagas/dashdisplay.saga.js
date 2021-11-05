import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchDashData(action) {
    try {
        console.log('Action from displayDashSaga. Action: ', action);
        const userDashData = yield axios.get('/api/dashdisplay');
        // yield put is another word for dispatch
        // updating dashboard data
        yield put({type: 'SET_DASHBOARD_TABLE', payload: userDashData.data});
    } catch(error) {
        // error log incase the signal is lost
        console.log('Error in SETting user dashboard table, error: ', error);
    }
}

function* fetchSelectedDate(action) {
    try {
        console.log('Action from displayDashSaga. Action: ', action);
        const userDashData = yield axios.get('/api/dashdisplay');
        // yield put is another word for dispatch
        yield put({type: 'SET_EOD_TABLE', payload: userDashData.data});
    } catch(error) {
        // error log incase the signal is lost
        console.log('Error in SETting user dashboard table, error: ', error);
    }
}

function* displayDashSaga() {
    // Saga listening for trigger to execute dashdata function
    // to be stored in state then appended to DOM
    yield takeLatest('FETCH_DASHBOARD_TABLE', fetchDashData);
    // to catch fetch for specific date to Edit or Delete
    yield takeLatest('FETCH_SELECTED_DATE_LOG', fetchSelectedDate);

}

export default displayDashSaga;