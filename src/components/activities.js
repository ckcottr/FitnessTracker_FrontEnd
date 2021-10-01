import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const activities = ({activitiesList, makeActivitiesList}) => {
    useEffect( function () {
        fetch('http://fitnesstrac-kr.herokuapp.com/api/activities')
               .then(response => response.json())
               .then(callback => {
                   console.log(callback);
                   makeActivitiesList(callback)
                   
               })
               .catch(function (error){
                   console.log("something")
                   console.error(error)
               }    )
   
       }, []);
       console.log(activitiesList);
       const activitiesElement = activitiesList.map((activities) =>
           <div id="listOfActivities">
               <h1>Activity#: {activities.id}</h1>
               <h2>Name: {activities.name}</h2>
               <h3>Description: {activities.description}</h3>
               
           </div>
   
   
       );
   
    return(
        <div>
            <h1 id="actheader">Activities</h1>
            {activitiesElement}
        </div>
    )
}

export default activities