

// getting triggered from datalogger.saga and will also trigger from ???
// making table reducer to pull data when user logs in and when they make updates
const dashdisplayReducer = (state = [], action) => {
    switch (action.type) {
        // changed form SET to FETCH, need to remap route/dispatch
        case 'SET_DASHBOARD_TABLE':
            return action.payload;
            // spread?
            // need other cases for editing specific 
            // some kind of data/id and nomenclature
            // what does that return look like?
        case 'SET_EOD_TABLE':
            return action.payload;
        default:
            return state;
    }
};

export default dashdisplayReducer;