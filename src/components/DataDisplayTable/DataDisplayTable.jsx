import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import DataDisplayRow from '../DataDisplayRow/DataDisplayRow';
import DataUoDRow from '../DataUoDRow/DataUoDRow';

function DataDisplayTable() {
    const dispatch = useDispatch();
    const [dataLogs, setDataLogs] = useSelector((store) => store.dashdisplayReducer);
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

    const handleCancelClick = () => {
        setEditLogId(null);
    }

    const handleEditClick = (event, log) => {
        event.preventDefault();
        setEditLogId(log.id);

        const formValues = {
            date: log.date,
            houseSleep: log.hoursSleep,
            sleepQuality: log.sleepQuality,
            startLux: log.startLux,
            endLux: log.endLux,
            exposureMinutes: log.exposureMinutes,
            mood: log.mood,
        };
        setEditLogData(formValues);
    }

    const handleDeleteClick = (logId) => {
// todo 
        const newLog = [...dataLogs];

        // const index = dataLogs.findIndex((log) => log.id === logId);

        // newLog.splice(index, 1);

        // setDataLogs(newLog);
    }

    const handleEditLogSubmit = (event) => {
        event.preventDefault();

        const editedLog = {
            LogId: editLogId,
            date: editLogData.date,
            houseSleep: editLogData.hoursSleep,
            sleepQuality: editLogData.sleepQuality,
            startLux: editLogData.startLux,
            endLux: editLogData.endLux,
            exposureMinutes: editLogData.exposureMinutes,
            mood: editLogData.mood,
        };
        dispatch({ type: 'EDIT_CURRENT_LOG', payload: editedLog });
        // can i dispatch twice like this?
        dispatch({ type: 'FETCH_DASHBOARD_TABLE' });
// todo is this the right way to add to reducer?
       
    } 
    

    return (
        <div className="displayTable">
            <h3>Weekly Log</h3>
            <div className="dataTable">
                <form onSubmit={handleEditLogSubmit}>
                <table className="dataTable">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Hours of Sleep</th>
                            <th>Quality of Sleep</th>
                            <th>Start Lux</th>
                            <th>End Lux</th>
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
                                editLogData={editLogData}
                                handleEditLogChange={handleEditLogChange}
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
                </form>
            </div>

        </div>

    );

}

export default DataDisplayTable;