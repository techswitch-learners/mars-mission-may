import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export function NavBar() {
    return (
        <div className='nav-bar'>
            <Link to='/'> Home </Link>
            <Link to='/spirit' >Spirit </Link>
            <Link to='/opportunity'>Opportunity</Link>
            <Link to='/curiosity'>Curiosity</Link>
            <Link to='/timeline'> Timeline</Link>
        </div>
    )
}
