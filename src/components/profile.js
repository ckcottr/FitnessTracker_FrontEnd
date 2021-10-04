import React, {useState} from 'react'
import ReactDOM from 'react-dom'


const ProfileActivities = () => {
    const [ createActivity, setCreateActivity ] = useState(false)
    const [ name, setName ] = useState("")
    const [ goal, setGoal ] = useState("")

console.log(name, goal)
    return (
        <div id ="profile">
            <h1>My Profile</h1>
            <button className= "createActivity" onClick={() => setCreateActivity(true)} >Create</button>{
                createActivity ? <div>
               <input type="text"onChange={(event)=>setName(event.target.value)} value={name} placeholder="Name"></input>
                <input type="text"onChange={(event)=>setGoal(event.target.value)} value={goal} placeholder="Goal"></input>
                <button onClick> Create</button></div> : null}     
            
            
        </div>
    )
}

export default ProfileActivities;