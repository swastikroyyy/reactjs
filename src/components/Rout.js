import React from 'react'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Rout() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/about">
                    <About></About>
                </Route>
                <Route path="/contact">
                    <Contact></Contact>
                </Route>
                <Route path="/">
                    <Home></Home>
                </Route>



            </Switch>

        </Router>
    )
}

export default Rout

function Home() {
    return (<p>leromeshdjuk dcskzhx scdabk csabkjf fsdabk</p>)
}
function About() {
    return (<h1>bjfebjkfewsbjkfewbj fdeswnklbjklfd</h1>)
}
function Contact() {
    return (<h1>bjfebjkfe wsbjkfewbj fdeswnklbjklfd</h1>)
}
