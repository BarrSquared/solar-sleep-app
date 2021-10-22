import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

function DataDisplayTable({ log, handleEditClick, handleDeleteClick }) {
    const dispatch = useDispatch();
    // const dashData = useSelector((store) => store.dashdisplayReducer);

    // const dispData = () => {
    //     dispatch({ type: 'FETCH_DASHBOARD_TABLE'});
    // }

    const dateToDisplay = moment(log.date).format('YYYY-MM-DD');

    return (
<>
                                <tr>
                                    <td>{dateToDisplay}</td>
                                    <td>{log.hours_sleep}</td>
                                    <td>{log.sleep_quality}</td>
                                    <td>{log.start_lux_meter}</td>
                                    <td>{log.end_lux_meter}</td>
                                    <td>{log.exposure_time}</td>
                                    <td>{log.mood_for_day}</td>
                                </tr>
                            </>)



}

export default DataDisplayTable;