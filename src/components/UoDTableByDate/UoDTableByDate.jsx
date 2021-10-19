import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function UoDTableByDate() {
    const dispatch = useDispatch();
    const history = useHistory();

    // destructure input data from this date, 
    // set state for data



    // add function to handle delete

    // add function to handle update
        // include dispatch
        // history.push("/dashboard");

        const handelCancel = () => {
            history.push("/dashboard");
          }

    return (
        <>

        </>
    );
}

export default UoDTableByDate;