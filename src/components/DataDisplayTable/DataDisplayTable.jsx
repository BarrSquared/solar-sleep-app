import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

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
                            <th>Mood Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* add component for dash table 
                        How to map over data from server in table?*/}
                    </tbody>
                </table>
            </div>

        </div>

    );

}

export default DataDisplayTable;