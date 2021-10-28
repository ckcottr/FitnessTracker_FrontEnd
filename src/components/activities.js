import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import API from '../api/api';

const activities = ({isLoggedIn}) => {
    const [activities, setActivities] = useState([]);
    const [render, setRender] = useState ('');
    useEffect(async function() {
        try {
            const data = await API.makeRequest('/activities', GET);
            console.log(data);
            setActivities(data);
        } catch (error) {
            alert(error);
        }
    }, [render]);

    const activityElements = activities.map((activity, i) => 
        <div className='activity-container' key={`activity-id-${i}`}>
            <p>{activity.name}</p>
            <p>{activity.description}</p>
        </div>);

    return (
        <div>
            {isLoggedIn?}
            <>
                <makeActivities setRender={setRender}/>
                <h2 className='title'>All Activities</h2>
                <div className='activities-container'>{activityElements}</div>
            </>
            </div>
    )
        }


// const activities = ({activitiesList, makeActivitiesList}) => {
//     useEffect( function () {
//         fetch('https://fitnesstrac-kr.herokuapp.com/api/activities')
//                .then(response => response.json())
//                .then(result => {
//                    console.log(result);
//                    makeActivitiesList(result)
                   
//                })
//                .catch(function (error){
//                    console.log("something")
//                    console.error(error)
//                }    )
   
//        }, []);
//        console.log(activitiesList);
//        const activitiesElement = activitiesList.map((activities) =>
//            <div id="allActivities">
//                <h1>Activity#: {activities.id}</h1>
//                <h2>Name: {activities.name}</h2>
//                <h3>Description: {activities.description}</h3>
               
//            </div>
   
   
//        );
   
//     return(
//         <div>
//             <h1 id="actheader">Activities</h1>
//             {activitiesElement}
//         </div>
//     )
// }

// export default activities