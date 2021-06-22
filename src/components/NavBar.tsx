import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../styles/BurgerButton.scss'
import {useState} from 'react';

export function NavBar() {
    
    const [burgerState , setBurgerState] = useState(true);

    function showBurgerMenu() {
        
        setBurgerState(!burgerState);



    }


    return (
        <div className='header'>
            <div className='nav-bar'>
                <Link to='/'> Home </Link>
                <Link to='/spirit' >Spirit </Link>
                <Link to='/opportunity'>Opportunity</Link>
                <Link to='/curiosity'>Curiosity</Link>
                <Link to='/timeline'> Timeline</Link>
            </div>

            <div className="burger-menu-container" onClick={showBurgerMenu}>
                <div className="bar-1"></div>
                <div className="bar-2"></div>
                <div className="bar-3"></div>
            </div>
        </div>
    )
}