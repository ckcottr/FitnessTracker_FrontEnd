import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import Login from './components/login';
import Home from './components/home'
import Profile from './components/profile'
import Navbar from './components/navbar';
import Register from './components/register'
import Routines from './components/routines'
import Activities from './components/activities'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"
import './style/style.css'
import { getPosts } from './components/utilites/api'

const App = () => {
    const [isNewUser, setIsNewUser] = useState(true)
    const [postList, setPostList] = useState([])
    const renderAuthForm = (e) => {
        if (isNewUser) {
            return <Login toggleNewUser={setIsNewUser} />
        } else {
            return <Register toggleNewUser />
        }
    }
    
    return (
        <>
            <Router>
                <div id="navbar">
                    <Navbar />
                </div>
                <main>
                    <Switch>
                        <div>
                            <Route exact path="/login"><Login /></Route>
                            <Route exact path="/activities"><Activities/></Route>
                            <Route exact path="/profile"><Profile/></Route>
                            <Route exact path="/register"><Register /></Route>
                            <Route exact path="/routines"><Routines /></Route>
                            <Route exact path="/"><Home /></Route>
                        </div>
                    </Switch>
                </main>
            </Router>



        </>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));