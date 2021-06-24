import { render, screen } from "@testing-library/react";
import App from "../../App";
import userEvent from "@testing-library/user-event";

test("renders navbar", () => {
    render(<App />);
    const curiosity = screen.getByTestId("curiosity");
    const opportunity = screen.getByTestId("opportunity");
    const spirit = screen.getByTestId("spirit");
    const timeline = screen.getByTestId("timeline");

    expect(curiosity).toBeInTheDocument();
    expect(opportunity).toBeInTheDocument();
    expect(spirit).toBeInTheDocument();
    expect(timeline).toBeInTheDocument();
});

test("burger button exists", () => {
    render(<App />);
    const burgerButton = screen.getByTestId("burger-test");

    expect(burgerButton).toBeInTheDocument();
});

test("burger button click changes testId of bars", () => {
    render(<App />);
    const burgerButton = screen.getByTestId("burger-test");
    userEvent.click(burgerButton);
    const closedBar = screen.getByTestId("closed-bar-1");

    expect(closedBar).toBeInTheDocument();
});

test('current page is highlighted in NavBar', () => {
    render(<App />); 
    const curiosityButton = screen.getByTestId("curiosity");
    userEvent.click(curiosityButton); 
    const homeNotSelected = screen.getByTestId("home-not-selected");
    
    expect(homeNotSelected).toBeInTheDocument();
})