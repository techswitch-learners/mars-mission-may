import React from "react";
import { render, screen } from "@testing-library/react";
import { WeatherBar } from "../../components/WeatherBar";

test("renders weather bar", () => {
    render( <WeatherBar />);
    const weatherBarElement = screen.getByTestId("weather-banner");

    expect(weatherBarElement).toBeInTheDocument();
});
