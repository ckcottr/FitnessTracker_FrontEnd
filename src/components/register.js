import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  console.log(user);
  console.log(password);
  async function handleSubmit(event) {
    if (user.length < 6) {
      alert(
        "username is too small. Please register with a username that's at least six characters long."
      );
      return;
    } else if (password.length < 8) {
      alert(
        "The password you entered is too small. Please use a password that's at least eight characters long."
      );
      return;
    }
    event.preventDefault();
    let failed = false;
    await fetch("https://fitnesstrac-kr.herokuapp.com/api/users/register", {
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
        localStorage.setItem("token", result.token);
        console.log(result);
        alert("You have succesfully signed up!");
      })
      .catch(console.error);
    console.error("error");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button>Register</button>
      </form>
      <h1>Already a member? Head over to the Login page and get signed in!</h1>
    </div>
  );
};

export default Register;
