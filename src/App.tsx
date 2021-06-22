
import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { NavBar } from './components/NavBar';

function App() {

    return (
        <Router>
            <NavBar />
        </Router>
    );
}

export default App;