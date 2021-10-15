

// getting triggered from datalogger.saga and will also trigger from ???
// making table reducer to pull data when user logs in and when they make updates
const dashdisplayReducer = (state = [], action) => {
    switch (action.type) {
        // todo changed form SET to FETCH, need to remap route/dispatchs
        case 'FETCH_EXPOSURE_TABLE':
            return action.payload;
        default:
            return state;
    }
};

export default dashdisplayReducer;