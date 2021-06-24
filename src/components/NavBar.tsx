import { Link } from 'react-router-dom';
import '../styles/BurgerButton.scss'
import { useState } from 'react';
import '../styles/NavBar.scss';


export function NavBar() {
    const [closeBurger, setBurgerState] = useState(true);
    const [currentPage, setCurrentPage] = useState('Home');

    return (
        <div className='header'>
            <div className={closeBurger ? 'nav-bar' : 'nav-bar-mobile'} data-testid="nav-bar">
                <Link to='/' className ={(currentPage === 'Home') ? 'nav-link-selected' : 'nav-link'} onClick={()=>{setBurgerState(true); setCurrentPage('Home')}} data-testid ={(currentPage === 'Home') ? 'home-selected' : 'home-not-selected'}> Home </Link>
                <Link to='/spirit' className = {(currentPage === 'Spirit') ? 'nav-link-selected' : 'nav-link'} onClick={()=>{setBurgerState(true); setCurrentPage('Spirit')}}>Spirit </Link>
                <Link to='/opportunity'className = {(currentPage === 'Opportunity') ? 'nav-link-selected' : 'nav-link'} onClick={()=>{setBurgerState(true); setCurrentPage('Opportunity')}}>Opportunity</Link>
                <Link to='/curiosity'className = {(currentPage === 'Curiosity') ? 'nav-link-selected' : 'nav-link'} onClick={()=>{setBurgerState(true); setCurrentPage('Curiosity')}} data-testid = 'curiosity-button'>Curiosity</Link>
                <Link to='/timeline'className = {(currentPage === 'Timeline') ? 'nav-link-selected' : 'nav-link'}  onClick={()=>{setBurgerState(true); setCurrentPage('Timeline')}}> Timeline</Link>
            </div>
            <div className= 'current-page-mobile'>{currentPage}</div>
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