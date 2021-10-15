import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';

function Dashboard() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const dashData = useSelector((store) => store.dashdisplayReducer);

  useEffect(() => {
    dispatch({ type: 'SET_DASHBOARD_TABLE'});
  }, [dispatch]);

  return (
    <div className="container">
      <h3>Welcome, {user.username}!</h3>
      <p>Your ID is: {user.id}</p>
      <p> {JSON.stringify(dashData)} </p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default Dashboard; 
