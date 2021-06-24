import { render, screen } from "@testing-library/react";
import { Footer } from "../../components/Footer";
import React from "react";

test("renders NASA logo in footer", () => {
    render(<Footer />);

    const nasaLogo = screen.getByTestId("nasa-logo");

    expect(nasaLogo).toBeInTheDocument();
    expect(nasaLogo.src === "https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png").toBeTruthy();
});

test("renders TechSwitch logo in footer", () => {
    render(<Footer />);

    const techSwitchLogo = screen.getByTestId("techswitch-logo");

    expect(techSwitchLogo).toBeInTheDocument();
    expect(techSwitchLogo.src === "https://www.techswitch.co.uk/images/logo.svg").toBeTruthy();
});