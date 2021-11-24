import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import moment from "moment";
import DataDisplayRow from '../DataDisplayRow/DataDisplayRow';
import DataUoDRow from '../DataUoDRow/DataUoDRow';
import { Table, TableBody, TableCell, TableContainer, Typography, TableHead, TableRow, Paper, Button, ButtonGroup } from '@mui/material';


function DataDisplayTable() {
    const history = useHistory();
    const dispatch = useDispatch();
    // const [dataLogs, setDataLogs] = useSelector((store) => store.dashdisplayReducer);
    const dashDisplay = useSelector((store) => store.dashdisplayReducer);
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

    const handleEditClick = (editLogId) => {
        history.push(`/datalogger/${editLogId}`);
        // setEditLogId(log.id);

        // const formValues = {
        //     date: log.date,
        //     houseSleep: log.hoursSleep,
        //     sleepQuality: log.sleepQuality,
        //     startLux: log.startLux,
        //     endLux: log.endLux,
        //     exposureMinutes: log.exposureMinutes,
        //     mood: log.mood,
        // };
        // setEditLogData(formValues);
    }

    const handleDeleteClick = (editLogId) => {
    
        console.log('Clicking handle delete, logId: ', editLogId);
        dispatch({ 
            type: 'DELETE_CURRENT_LOG', 
            payload: {id: editLogId}
        });
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
            <h3>Monthly Log</h3>
            <div className="dataTable">
                <form onSubmit={handleEditLogSubmit}>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 350 }} size="small" aria-label="display table">
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography variant="h6">Date</Typography></TableCell>
                            <TableCell><Typography variant="h6">Log ID</Typography></TableCell>
                            <TableCell><Typography variant="h6">Hours of Sleep</Typography></TableCell>
                            <TableCell><Typography variant="h6">Quality of Sleep</Typography></TableCell>
                            <TableCell><Typography variant="h6">Start Lux</Typography></TableCell>
                            <TableCell><Typography variant="h6">End Lux</Typography></TableCell>
                            <TableCell><Typography variant="h6">Exposure Duration</Typography></TableCell>
                            <TableCell><Typography variant="h6">Mood Rating</Typography></TableCell>
                            <TableCell><Typography variant="h6">Actions</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {/* <DataDisplayRow /> */}
                    {dashDisplay.map((log) => (
                                <DataDisplayRow
                                log={log}
                                handleEditClick={handleEditClick}
                                handleDeleteClick={handleDeleteClick}

                                />
                            ))}
                       
                    </TableBody>
                    </Table>
                </TableContainer>
                </form>
            </div>

        </div>

    );

}

export default DataDisplayTable;

