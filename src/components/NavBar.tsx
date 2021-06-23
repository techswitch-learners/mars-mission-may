import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";

export function NavBar() {
	return (
		<div className='nav-bar'>
			<Link className='nav-link' to='/'> Home </Link>
			<Link className='nav-link' to='/spirit' >Spirit </Link>
			<Link className='nav-link' to='/opportunity'>Opportunity</Link>
			<Link className='nav-link' to='/curiosity'>Curiosity</Link>
			<Link className='nav-link' to='/timeline'> Timeline</Link>
		</div>
	);
}