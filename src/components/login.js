import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useHistory, userHistory } from "react-router-dom";

const Login = ({ userToken }) => {
  let history = useHistory();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  async function saveToken(event) {
    if (user != user) {
      alert("Invaild username. Please resubmit!");
      return;
    } else if (password.length < 8) {
      alert("The password you entered is incorrect.");
      return;
    }
    event.preventDefault();
    let failed = 500;
    fetch("http://fitnesstrac-kr.herokuapp.com/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user,
        password: password,
      }),
    })
      .then((response) => {
        console.log(response);
        failed = !response.ok;
        return response.json();
      })
      .then((result) => {
        if (failed) {
          alert(result.message);
          history.push("/login");
        } else {
          history.push("/");
        }

        localStorage.setItem("token", result.token);
        console.log(result);
      })
      .catch(console.error);
  }

  async function logout(event) {
    event.preventDefault();
    delete localStorage.token;
  }
  return (
    <div id="login">
      <form onSubmit={saveToken}>
        <input
          type="text"
          onChange={(event) => setUser(event.target.value)}
          value={user}
          required
          name="username"
          placeholder="username"
        ></input>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          required
          name="password"
          placeholder="password"
        ></input>
        <button>Log In</button>
      </form>
      <h1>
        Not a member? Create an account to create and send messages! Otherwise
        login with existing account!
      </h1>
      {<button onClick={logout}>Logout</button>}
    </div>
  );
};

export default Login;
