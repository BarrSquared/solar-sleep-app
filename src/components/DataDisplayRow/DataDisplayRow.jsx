import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function DataDisplayTable({ log, handleEditClick, handleDeleteClick }) {
    const dispatch = useDispatch();
// fix momentjs month abr then day
    const dateToDisplay = moment(log.date).format('MMM Do');

    // todo Should I change DataUoDRow to UpdateRow,
    // todo pass into this component by passing in the 
    // todo current log and the handle edit funciton
    return (
    <>
        <tr>
            <td>{dateToDisplay}</td>
            <td>{log.id}</td>
            <td>{log.hours_sleep}</td>
            <td>{log.sleep_quality}</td>
            <td>{log.start_lux_meter}</td>
            <td>{log.end_lux_meter}</td>
            <td>{log.exposure_time}</td>
            <td>{log.mood_for_day}</td>
            <td>
                <button 
                type="button" 
                onClick={() => handleDeleteClick(log.id)}>
                    Delete
                </button>
            </td>
        </tr>
    </>
    )

}

export default DataDisplayTable;