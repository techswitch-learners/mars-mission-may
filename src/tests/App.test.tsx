import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders landing/home page', () => {
    render(<App />);

    const weatherBarElement = screen.getByText("Replace with component for weather bar");
    const landingPageElement = screen.getByText("Replace with component for landing page");
    const footerElement = screen.getByText("Replace with component for footer");

    expect(weatherBarElement).toBeInTheDocument();
    expect(landingPageElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
});
