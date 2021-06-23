import { Link } from 'react-router-dom';
import '../styles/BurgerButton.scss'
import { useState } from 'react';
import '../styles/NavBar.scss';


export function NavBar() {
    const [closeBurger, setBurgerState] = useState(true);
    return (
        <div className='header'>
            <div className={closeBurger ? 'nav-bar' : 'nav-bar-mobile'} data-testid="nav-bar">
                <Link to='/' className = 'nav-link' onClick={()=>{setBurgerState(true)}}> Home </Link>
                <Link to='/spirit' className = 'nav-link' onClick={()=>{setBurgerState(true)}}>Spirit </Link>
                <Link to='/opportunity'className = 'nav-link' onClick={()=>{setBurgerState(true)}}>Opportunity</Link>
                <Link to='/curiosity'className = 'nav-link' onClick={()=>{setBurgerState(true)}}>Curiosity</Link>
                <Link to='/timeline'className = 'nav-link' onClick={()=>{setBurgerState(true)}}> Timeline</Link>
            </div>

            <div className="burger-button" 
                onClick={() => {setBurgerState(!closeBurger)}}
                data-testid= 'burger-test'>
                <div className={closeBurger ? "opened-bar-1" : "closed-bar-1"} 
                    data-testid={closeBurger ? "opened-bar-1" : "closed-bar-1"}></div>
                <div className={closeBurger ? "opened-bar-2" : "closed-bar-2"}></div>
                <div className={closeBurger ? "opened-bar-3" : "closed-bar-3"}></div>
            </div>
        </div>
    )
}