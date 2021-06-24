import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders landing/home page", () => {
    render(<App />);

    const weatherBarElement = screen.getByText("Replace with component for weather bar");
    const footerElement = screen.getByTestId("footer");
    const landingPageElement = screen.getByText("Home Page");

    expect(weatherBarElement).toBeInTheDocument();
    expect(landingPageElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
});
