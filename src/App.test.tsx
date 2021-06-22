import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
    render(<App />);
    const homepageElement = screen.getByText("Home Page");
    expect(homepageElement).toBeInTheDocument();
});

