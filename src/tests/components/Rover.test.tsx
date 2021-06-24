import { render, screen } from "@testing-library/react";
import { Rover } from "../../components/Rover";
import { MemoryRouter, Route } from "react-router-dom";
import { Home } from "../../components/Home";
import React from "react";

interface RoverWithRouteProps {
    initialRoute: string;
}

function RoverWithRoute({ initialRoute }: RoverWithRouteProps) {
    return (
        <MemoryRouter initialEntries={[initialRoute]}>
            <Route path="/:rover">
                <Rover />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </MemoryRouter>
    );
}

test("renders Rover Page - Spirit", () => {
    render(<RoverWithRoute initialRoute={"/SpiRit"} />);
    const roverElement = screen.getByText("Hello Spirit");
    expect(roverElement).toBeInTheDocument();
});

test("renders Rover Page - Opportunity", () => {
    render(<RoverWithRoute initialRoute={"/opportunity"} />);
    const roverElement = screen.getByText("Hello Opportunity");
    expect(roverElement).toBeInTheDocument();
});

test("renders Rover Page - Curiosity", () => {
    render(<RoverWithRoute initialRoute={"/CURIOSITY"} />);
    const roverElement = screen.getByText("Hello Curiosity");
    expect(roverElement).toBeInTheDocument();
});

test("renders Rover Page - redirect to Home", () => {
    render(<RoverWithRoute initialRoute={"/anything"} />);
    const roverElement = screen.getAllByText("Curiosity");
    expect(roverElement[0]).toBeInTheDocument();
});
