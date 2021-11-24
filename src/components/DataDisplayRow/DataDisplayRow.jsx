import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Table, TableBody, TableCell, TableContainer, Typography, TableHead, TableRow, Paper, Button, ButtonGroup } from '@mui/material';


function DataDisplayTable({ log, handleEditClick, handleDeleteClick }) {
    const dispatch = useDispatch();
// fix momentjs month abr then day
    const dateToDisplay = moment(log.date).format('MMM Do');

    return (
    <>
        <TableRow>
            <TableCell><Typography variant="body1">{dateToDisplay}</Typography></TableCell>
            <TableCell><Typography variant="body1">{log.id}</Typography></TableCell>
            <TableCell><Typography variant="body1">{log.hours_sleep}</Typography></TableCell>
            <TableCell><Typography variant="body1">{log.sleep_quality}</Typography></TableCell>
            <TableCell><Typography variant="body1">{log.start_lux_meter}</Typography></TableCell>
            <TableCell><Typography variant="body1">{log.end_lux_meter}</Typography></TableCell>
            <TableCell><Typography variant="body1">{log.exposure_time}</Typography></TableCell>
            <TableCell><Typography variant="body1">{log.mood_for_day}</Typography></TableCell>
            <TableCell>
                <Button
                        variant="contained"
                        type="button"
                        color="secondary"
                        size="small"
                onClick={() => handleDeleteClick(log.id)}>
                    Delete
                </Button>
            </TableCell>
            <TableCell>
                <Button
                        type="button"
                        variant="outlined"
                        color="warning"
                        size="small"
                onClick={() => handleEditClick(log.id)}>
                    Edit
                </Button>
            </TableCell>
        </TableRow>
    </>
    )

}

export default DataDisplayTable;