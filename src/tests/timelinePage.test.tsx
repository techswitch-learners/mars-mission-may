import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { TimelinePage } from '../components/timelinePage.jsx';

test('renders Timeline Page', () => {
    render(<TimelinePage />);
    const helloWorldElement = screen.getByText("Timeline");
    expect(helloWorldElement).toBeInTheDocument();
});
