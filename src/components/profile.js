import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import grabToken from '../utilities/token.js'


const ProfileActivities = () => {
    const [ createActivity, setCreateActivity ] = useState([])
    const [ name, setName ] = useState("")
    const [ goal, setGoal ] = useState("")
 const token = grabToken();
console.log(name, goal)

function createNewActivity() {
fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer' + token
  }, 
  body: JSON.stringify({
    name: name,
    goal: goal,
    isPublic: true
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);

}




    return (
        <div id ="profile">
            <h1>My Profile</h1>
            <button className= "createActivity" onClick = { () => createNewActivity()} >Make Goal</button>{
                createActivity ? <div>
               <input type="text"onChange={(event)=>setName(event.target.value)} value={name} placeholder="Name"></input>
                <input type="text"onChange={(event)=>setGoal(event.target.value)} value={goal} placeholder="Goal"></input>
                </div>: null  } 
            
            
        </div>
    )
}

export default ProfileActivities;