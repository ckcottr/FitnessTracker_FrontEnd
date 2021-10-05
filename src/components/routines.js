import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const Routines = ({ routinesList, setRoutinesList }) => {
    useEffect(function () {
        fetch('http://fitnesstrac-kr.herokuapp.com/api/routines')
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
    console.log(routinesList);
    const routinesElement = routinesList.map((routines) =>
        <div id="allRoutines">
            <h1>User: {routines.creatorName}</h1>
            <h2>Name: {routines.name}</h2>
            <h3>goal: {routines.goal}</h3>
        </div>

    );
    return (
        <div >
            <h1 id="routinesheader">Routines</h1>
            {routinesElement}
        </div>
    )
}

export default Routines
