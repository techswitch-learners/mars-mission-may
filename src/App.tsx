import "./App.scss";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Rover } from "./components/Rover";
import { Timeline } from "./components/Timeline";
import { WeatherBar } from "./components/WeatherBar";
import React from "react";

function App() {
    return (
        <Router>
            <NavBar />
            <WeatherBar/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/timeline">
                    <Timeline />
                </Route>
                <Route exact path="/:rover"> 
                    <Rover />
                </Route>
                <Route exact path="/:rover/:photoIdString">
                    <Rover />
                </Route>
                <Route path="">
                    <div>Sorry path not found</div>
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;