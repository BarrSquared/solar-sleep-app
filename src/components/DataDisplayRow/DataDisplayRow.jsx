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

    // var? / function to take in start lux, end lux and avg
    const startLux = dashData.start_lux_meter;
    const endLux = dashData.end_lux_meter;
    const avgLux = ((startLux + endLux)/2);
    const startTime = dashData.start_lux_exposure_time;
    const endTime = dashData.end_lux_exposure_time;
    const timeOfExposure = endTime - startTime;

    return (
    <>
    {dashData.map((log) => {
                            return(<>
                                <tr>
                                    <td>{log.date}</td>
                                    <td>{log.hours_sleep}</td>
                                    <td>{log.sleep_quality}</td>
                                    <td>{avgLux}</td>
                                    <td>{timeOfExposure}</td>
                                    <td>{log.mood_for_day}</td>
                                </tr>
                            </>)
                        })}
    </>
    );

}

export default DataDisplayTable;