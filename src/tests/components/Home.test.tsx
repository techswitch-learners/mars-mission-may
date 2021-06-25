import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "../../components/Home";
import { BrowserRouter as Router } from "react-router-dom";

test("renders Home Page", () => {
    render(
        <Router>
            <Home />
        </Router>
    );
    const homePageElement = screen.getByText("Curiosity");
    expect(homePageElement).toBeInTheDocument();
});

test("renders Opportunity Card", () => {
    render(
        <Router>
            <Home />
        </Router>
    );
    const opportunityCard = screen.getByText("Opportunity");
    expect(opportunityCard).toBeInTheDocument();
});

test("check Link on Opportunity Card renders", () => {
    render(
        <Router>
            <Home />
        </Router>
    );
    const link = screen.getAllByRole("link");
    expect(link[1]).toHaveAttribute("href", "/opportunity");
});

test("renders Curiosity Card", () => {
    render(
        <Router>
            <Home />
        </Router>
    );
    const curiosityCard = screen.getByText("Curiosity");
    expect(curiosityCard).toBeInTheDocument();
});

test("check Link on Curiosity Card renders", () => {
    render(
        <Router>
            <Home />
        </Router>
    );
    const link = screen.getAllByRole("link");
    expect(link[0]).toHaveAttribute("href", "/curiosity");
});
