import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import DataDisplayRow from '../DataDisplayRow/DataDisplayRow';

function DataDisplayTable() {
    const dispatch = useDispatch();
    const dashData = useSelector((store) => store.dashdisplayReducer);

    const dispData = () => {
        dispatch({ type: 'FETCH_DASHBOARD_TABLE'});
    }

    useEffect(() => {
        dispData();
    }, []);

    // some kind of handle delete

    // some kind of edit function or toggle?

    // handle edit/update/put, with var's for data to replace
    
    // var? / function to take in start lux, end lux and avg
    // const startLux = dashData.startLux;
    // const endLux = dashData.endLux;
    // const avgLux = ((startLux + endLux)/2);
    // const startTime = dashData.startTime;
    // const endTime = dashData.endTime;
    // const timeOfExposure = (startTime - endTime);

    // var? / function to figure total time of exposure

    return (
        <div className="displayTable">
            <h3>Weekly Log</h3>
            <div className="dataTable">
                <table className="dataTable">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Hours of Sleep</th>
                            <th>Quality of Sleep</th>
                            <th>Avg Lux Exposure</th>
                            <th>Exposure Duration</th>
                            <th>Mood Rating</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    <DataDisplayRow />
                       
                    </tbody>
                </table>
            </div>

        </div>

    );

}

export default DataDisplayTable;