

// getting triggered from datalogger.saga and will also trigger from ???
// making table reducer to pull data when user logs in and when they make updates
const datadisplaytableReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_EXPOSURE_TABLE':
            return action.payload;
        default:
            return state;
    }
};

export default datadisplaytableReducer;