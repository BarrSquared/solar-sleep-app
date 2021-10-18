

// getting triggered from datalogger.saga and will also trigger from ???
// making table reducer to pull data when user logs in and when they make updates
const dashdisplayReducer = (state = [], action) => {
    switch (action.type) {
        // changed form SET to FETCH, need to remap route/dispatch
        case 'FETCH_DASHBOARD_TABLE':
            return action.payload;
            // spread?
        default:
            return state;
    }
};

export default dashdisplayReducer;