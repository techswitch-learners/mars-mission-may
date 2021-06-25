import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NavBar } from "../../components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

test("renders navbar", () => {
    render(<Router><NavBar /></Router>);
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
    render(<Router><NavBar /></Router>);
    const burgerButton = screen.getByTestId("burger-test");

    expect(burgerButton).toBeInTheDocument();
});

test("burger button click changes testId of bars", () => {
    render(<Router><NavBar /></Router>);
    const burgerButton = screen.getByTestId("burger-test");
    userEvent.click(burgerButton);
    const closedBar = screen.getByTestId("closed-bar-1");

    expect(closedBar).toBeInTheDocument();
});

test("current page is highlighted in NavBar", () => {
    render(<Router><NavBar /></Router>);
    const curiosityButton = screen.getByTestId("curiosity");
    userEvent.click(curiosityButton); 
    const homeNotSelected = screen.getByTestId("home-not-selected");
    
    expect(homeNotSelected).toBeInTheDocument();
});
