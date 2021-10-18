import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import Calendar from 'react-calendar';
import DataDisplayTable from '../DataDisplayTable/DataDisplayTable';


function Dashboard() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const dashData = useSelector((store) => store.dashdisplayReducer);
  
  const [value, onChange] = useState(new Date());
  

  // const dispData = () => {
  //   //todo do I need a fetch also 
  //   // todo or am i calling it in the loop set will run into?
  //   dispatch({ type: 'SET_DASHBOARD_TABLE'});
  // }

  // useEffect(() => {
  //   // dispatch({ type: 'SET_DASHBOARD_TABLE'});
  //   dispData();
  // }, []);

  return (
    <div className="container">
      <h3>Welcome, {user.username}!</h3>
      <p>Your ID is: {user.id}</p>
      <p> {JSON.stringify(dashData)} </p>
      <br />
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
      <br />
      <DataDisplayTable />

      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default Dashboard; 
