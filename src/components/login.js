import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory, userHistory } from 'react-router-dom';

const Login = ({ userToken }) => {
   
    let history = useHistory();
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    async function saveToken(event) {
        event.preventDefault()
        fetch('https://fitnesstrac-kr.herokuapp.com/api/users/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                 
                    username: event.target.username.value,
                    password: event.target.password.value
                
            })
        }).then(response => response.json())
            .then(result => {
                localStorage.setItem("token", result.data.token)
                console.log(result);
            })
            .catch(console.error);
    }

async function onSubmit(e) {
    e.preventDefault();
    history.push('/');
}

    return (
        <div>

            <form onSubmit={saveToken, onSubmit}>
                <input type="text" onChange={(event) => setUser(event.target.value)} value={user} required name="username" placeholder="username"></input>
                <input type="password" onChange={(event) => setPassword(event.target.value)} value={password} required name="password" placeholder="password"></input>
                <button>Log In</button>
            </form>
            <h1>Not a member? Create an account to create and send messages! Otherwise login with existing account!</h1>

        </div>
    )


}





export default Login;