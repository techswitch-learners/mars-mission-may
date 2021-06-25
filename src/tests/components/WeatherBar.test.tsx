import React from "react";
import { render, screen } from "@testing-library/react";
import { WeatherBar } from "../../components/WeatherBar";
import { BrowserRouter as Router } from "react-router-dom";

test("renders weather bar", () => {
    render(
        <Router>
            <WeatherBar />
        </Router>
    );
    const weatherBarElement = screen.getByTestId("weather-banner");
    expect(weatherBarElement).toBeInTheDocument();
});
