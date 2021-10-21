import React, { useEffect, useState, fragment } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import Calendar from 'react-calendar';
import DataDisplayTable from '../DataDisplayTable/DataDisplayTable';
import DataUoDRow from '../DataUoDRow/DataUoDRow';
// import { GiSundial } from "react-icons/gi";
// test sundial
import moment from "moment";

function Dashboard() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const dashData = useSelector((store) => store.dashdisplayReducer);
  

  // const dispData = () => {
  //   //todo do I need a fetch also 
  //   // todo or am i calling it in the loop set will run into?
  //   dispatch({ type: 'SET_DASHBOARD_TABLE'});
  // }

  // useEffect(() => {
  //   // dispatch({ type: 'SET_DASHBOARD_TABLE'});
  //   dispData();
  // }, []);

  // const [value, setValue] = useState(new Date());

  // function onChange(nextValue) {
  //   setValue(nextValue);
  //   const dateToDisplay = moment(nextValue).format('YYYY-MM-DD');
  //   dispatch({ type: 'FETCH_SELECTED_DATE_LOG'})
  // }

  return (
    <div className="container">
      <h3>Stay solar, {user.username}!</h3>
      {/* <p>Your ID is: {user.id}</p> */}
      {/* <p> {JSON.stringify(dashData)} </p> */}
      {/* <br />
      <div className="eodCal">
        <h3>Edit or Delete Daily Log</h3>
        <Calendar onChange={onChange} value={value} />
      </div>
      <>  </> */}
      <br />
      <DataDisplayTable />
      <br />
      <br />
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default Dashboard; 
