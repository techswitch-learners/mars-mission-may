import { render, screen } from '@testing-library/react';
import App from '../../App';
import { NavBar } from '../../components/NavBar';
import userEvent from '@testing-library/user-event';

test('renders navbar', () => {
    render(<App />);

    const home = screen.getByTestId("home");
    const curiosity = screen.getByTestId("curiosity");
    const opportunity = screen.getByTestId("opportunity");
    const spirit = screen.getByTestId("spirit");
    const timeline = screen.getByTestId("timeline");

    expect(home).toBeInTheDocument();
    expect(curiosity).toBeInTheDocument();
    expect(opportunity).toBeInTheDocument();
    expect(spirit).toBeInTheDocument();
    expect(timeline).toBeInTheDocument();
});

test('burger button exists', () => {
    render(<App />);
    const burgerButton = screen.getByTestId("burger-test");

    expect(burgerButton).toBeInTheDocument();
});

test('burger button click changes testId of bars', () => {
    render(<App />);
    const burgerButton = screen.getByTestId("burger-test");
    userEvent.click(burgerButton); 
    const closedBar = screen.getByTestId("closed-bar-1");

    expect(closedBar).toBeInTheDocument();
});