import { Link } from 'react-router-dom';
import '../styles/BurgerButton.scss'
import { useState } from 'react';
import '../styles/NavBar.scss';

export function NavBar() {
    const [closeBurger, setBurgerState] = useState(true);
    const [currentPage, setCurrentPage] = useState('Home');

    function clickLinkHandler (currentPage: string) {
        setBurgerState(true); 
        setCurrentPage(currentPage);
    }

    return (
        <div className='header'>
            <div className={closeBurger ? 'nav-bar' : 'nav-bar-mobile'} data-testid="nav-bar">
                <Link to='/' className = 'nav-link' data-testid="home" onClick={()=>{clickLinkHandler('Home')}}> Home </Link>
                <Link to='/spirit' className = 'nav-link' data-testid="spirit" onClick={()=>{clickLinkHandler('Spirit')}}>Spirit </Link>
                <Link to='/opportunity'className = 'nav-link' data-testid="opportunity" onClick={()=>{clickLinkHandler('Opportunity')}}>Opportunity</Link>
                <Link to='/curiosity'className = 'nav-link' data-testid="curiosity" onClick={()=>{clickLinkHandler('Curiosity')}}>Curiosity</Link>
                <Link to='/timeline'className = 'nav-link' data-testid="timeline" onClick={()=>{clickLinkHandler('Timeline')}}> Timeline</Link>
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