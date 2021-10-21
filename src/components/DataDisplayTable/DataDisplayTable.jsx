import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import DataDisplayRow from '../DataDisplayRow/DataDisplayRow';
import DataUoDRow from '../DataUoDRow/DataUoDRow';

function DataDisplayTable() {
    const dispatch = useDispatch();
    const dataLogs = useSelector((store) => store.dashdisplayReducer);
    const [editLogId, setEditLogId] = useState(null);
    const [editLogData, setEditLogData] = useState({
        hoursSleep: 0, sleepQuality: 0, startLux: 0, endLux: 0, exposureMinutes: 0, mood: 0, 
    })

    const dispData = () => {
        dispatch({ type: 'FETCH_DASHBOARD_TABLE'});
    }

    useEffect(() => {
        dispData();
    }, []);

    

    

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
                    {/* <DataDisplayRow /> */}
                    {dataLogs.map((log) => (
                        <Fragment>
                            {editLogId === log.id ? (
                                <DataUoDRow
                                editFormData={editFormData}
                                handleEditFormChange={handleEditFormChange}
                                handleCancelClick={handleCancelClick}
                                />
                            ) : (
                                <DataDisplayRow
                                log={log}
                                handleEditClick={handleEditClick}
                                handleDeleteClick={handleDeleteClick}
                                />
                            )}
                        </Fragment>
                    ))}
                       
                    </tbody>
                </table>
            </div>

        </div>

    );

}

export default DataDisplayTable;