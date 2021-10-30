import React, {useState} from "react"

const Register = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    console.log(user)
    console.log(password)
    async function handleSubmit(event) {
        event.preventDefault()
        await fetch('https://fitnesstrac-kr.herokuapp.com/api/users/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              
                    username: user,
                    password: password,
                
            })
        }).then(response => response.json())
        .then(result => {
            localStorage.setItem("token", result.token)
            console.log(result);
        })
        .catch(console.error)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" onChange={(event) => setUser(event.target.value)} value={user} required name="username" placeholder="username"></input>
                <input type="password" onChange={(event) => setPassword(event.target.value)} value={password} required name="password" placeholder="password"></input>
                <button>Register</button>
            </form>
            <h1>Already a member? Head over to the Login page and get signed in!</h1>
        </div>
    )
}

export default Register