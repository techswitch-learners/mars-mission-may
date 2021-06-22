import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { TimelinePage } from '../components/TimelinePage.jsx';

test('renders Timeline Page', () => {
    render(<TimelinePage />);
    const helloWorldElement = screen.getByText("Timeline - Change for git");
    expect(helloWorldElement).toBeInTheDocument();
});
