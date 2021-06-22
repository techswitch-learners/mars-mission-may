import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello how are you', () => {
    render(<App />);
    const helloWorldElement = screen.getByText("Hello how are you?");
    expect(helloWorldElement).toBeInTheDocument();
});
