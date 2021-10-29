import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const activities = () => {
  const [activitiesList , setActivitiesList] = useState([]);
  useEffect(function () {
    fetch("https://fitnesstrac-kr.herokuapp.com/api/activities")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setActivitiesList(result)
    
      })
      .catch(function (error) {
        console.log("something");
        console.error(error);
      });
  }, []);
  const activitiesElement = () => {
    console.log(activitiesList);
    return activitiesList.map((activities) => (
      <div id="allActivities">
        <h1>Activity#: {activities.id}</h1>
        <h2>Name: {activities.name}</h2>
        <h3>Description: {activities.description}</h3>
      </div>
    ));
  };
  return (
    <div>
      <h1 id="actheader">Activities</h1>
      {activitiesElement()}
    </div>
  );
};

export default activities;
