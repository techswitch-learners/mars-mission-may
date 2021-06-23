import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import React from "react";

test("renders navbar", () => {
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