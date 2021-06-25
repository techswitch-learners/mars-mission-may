import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/NavBar.scss";
import React from "react";

export function NavBar() {

    const location = useLocation();
    const removedSlash = location.pathname.slice(1);
    let pageName = removedSlash.substr(0, 1).toUpperCase() + removedSlash.substr(1).toLowerCase();

    if (pageName === "") {
        pageName = "Home";
    }
   
    const [closeBurger, setBurgerState] = useState(true);
    const [currentPage, setCurrentPage] = useState(pageName);

    function clickLinkHandler(currentPage: string) {
        setBurgerState(true);
        setCurrentPage(currentPage);
    }

    return (
        <div className='header'>
            <div className={closeBurger ? "nav-bar" : "nav-bar-mobile"} data-testid="nav-bar">
                <Link to='/'
                    className={currentPage === "Home" ? "nav-link-selected" : "nav-link"}
                    onClick={() => clickLinkHandler("Home")}
                    data-testid={currentPage === "Home" ? "home-selected" : "home-not-selected"}>
                    Home
                </Link>
                <Link to='/spirit'
                    className={currentPage === "Spirit" ? "nav-link-selected" : "nav-link"} 
                    data-testid="spirit"
                    onClick={() => clickLinkHandler("Spirit")}>
                    Spirit
                </Link>
                <Link to='/opportunity'
                    className={currentPage === "Opportunity" ? "nav-link-selected" : "nav-link"} 
                    data-testid="opportunity"
                    onClick={() => clickLinkHandler("Opportunity")}>
                    Opportunity
                </Link>
                <Link
                    to='/curiosity' className={currentPage === "Curiosity" ? "nav-link-selected" : "nav-link"} 
                    data-testid="curiosity"
                    onClick={() => clickLinkHandler("Curiosity")}>
                    Curiosity
                </Link>
                <Link to='/timeline'
                    className={currentPage === "Timeline" ? "nav-link-selected" : "nav-link"} 
                    data-testid="timeline"
                    onClick={() => clickLinkHandler("Timeline")}>
                    Timeline 
                </Link>
            </div>
            <div className='current-page-mobile'>{currentPage}</div>
            <div className="burger-button"
                onClick={() => setBurgerState(!closeBurger)}
                data-testid='burger-test'>
                <div className={closeBurger ? "opened-bar-1" : "closed-bar-1"}
                    data-testid={closeBurger ? "opened-bar-1" : "closed-bar-1"}></div>
                <div className={closeBurger ? "opened-bar-2" : "closed-bar-2"}></div>
                <div className={closeBurger ? "opened-bar-3" : "closed-bar-3"}></div>
            </div>
        </div>
    );
}