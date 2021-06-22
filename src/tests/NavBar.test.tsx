import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { NavBar } from '../components/NavBar';

test('renders navbar', () => {
    render(<App />);
    const home = screen.getByText("Home");
    const curiosity = screen.getByText("Curiosity");
    const opportunity = screen.getByText("Opportunity");
    const spirit = screen.getByText("Spirit");
    const timeline = screen.getByText("Timeline");
    expect(home).toBeInTheDocument();
    expect(curiosity).toBeInTheDocument();
    expect(opportunity).toBeInTheDocument();
    expect(spirit).toBeInTheDocument();
    expect(timeline).toBeInTheDocument();

});