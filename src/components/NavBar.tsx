import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../styles/BurgerButton.scss'
import { useState } from 'react';

export function NavBar() {

    const [closeBurger, setBurgerState] = useState(true);
    console.log(closeBurger);

    return (
        <div className='header'>
            <div className={closeBurger ? 'nav-bar' : 'nav-bar-mobile'}>
                <Link to='/'> Home </Link>
                <Link to='/spirit' >Spirit </Link>
                <Link to='/opportunity'>Opportunity</Link>
                <Link to='/curiosity'>Curiosity</Link>
                <Link to='/timeline'> Timeline</Link>
            </div>

            <div className="burger-menu-container" 
                onClick={() => {setBurgerState(!closeBurger)}
            }>
                <div className={closeBurger ? "bar-1" : "change-bar-1"}></div>
                <div className={closeBurger ? "bar-2" : "change-bar-2"}></div>
                <div className={closeBurger ? "bar-3" : "change-bar-3"}></div>
            </div>
        </div>
    )
}