import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

function DataDisplayTable({ log, handleEditClick, handleDeleteClick }) {
    const dispatch = useDispatch();
    const dashData = useSelector((store) => store.dashdisplayReducer);

    const dispData = () => {
        dispatch({ type: 'FETCH_DASHBOARD_TABLE'});
    }

    useEffect(() => {
        dispData();
    }, []);

    // var? / function to take in start lux, end lux and avg
    const startLux = dashData.start_lux_meter;
    const endLux = dashData.end_lux_meter;
    // const avgLux = (startLux, endLux) => {
    //     average = ((startLux + endLux)/2);
    // }



    const dateToDisplay = moment(dashData.date).format('YYYY-MM-DD');

    return (
    <>
    {dashData.map((log) => {
                            return(<>
                                <tr>
                                    <td>{dateToDisplay}</td>
                                    <td>{log.hours_sleep}</td>
                                    <td>{log.sleep_quality}</td>
                                    <td>{log.end_lux_meter}</td>
                                    <td>{log.exposure_time}</td>
                                    <td>{log.mood_for_day}</td>
                                </tr>
                            </>)
                        })}
    </>
    );

}

export default DataDisplayTable;