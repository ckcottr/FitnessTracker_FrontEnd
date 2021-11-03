import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const Routines = () => {
    const [ routinesList, setRoutinesList ] = useState([]);
    useEffect(function () {
        fetch('https://fitnesstrac-kr.herokuapp.com/api/routines')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setRoutinesList(result)

            })
            .catch(function (error) {
                console.log("something")
                console.error(error)
            })

    }, []);
    const routinesElement = () => { 
        console.log(routinesList);
        return routinesList.map((routines) =>
        <div id="allRoutines">
            <h1>User: {routines.creatorName}</h1>
            <h2>Name: {routines.name}</h2>
            <h3>goal: {routines.goal}</h3>
            <h1>Activities</h1> 
            {
                routines.activities.map((activities) => {
                    return (
                        <div>
                            <h2>Name: {activities.name}</h2>
                            <p>Description: {activities.description}</p>
                            <h2>Count: {activities.count}</h2>
                            <h3>Duration: {activities.duration}</h3>
                             </div> 
                    )
                })
            }
        </div>

    );
    }
    return (
        <div >
            <h1 id="routinesheader">Routines</h1>
            {routinesElement()}
        </div>
    )
}

export default Routines
