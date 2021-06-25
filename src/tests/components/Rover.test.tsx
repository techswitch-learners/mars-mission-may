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
    render(<RoverWithRoute initialRoute={"/spirit"} />);
    const roverElement = screen.getByTestId("spirit");
    expect(roverElement).toBeInTheDocument();
});

test("renders Rover Page - Opportunity", () => {
    render(<RoverWithRoute initialRoute={"/opportunity"} />);
    const roverElement = screen.getByTestId("opportunity");
    expect(roverElement).toBeInTheDocument();
});

test("renders Rover Page - Curiosity", () => {
    render(<RoverWithRoute initialRoute={"/curiosity"} />);
    const roverElement = screen.getByTestId("curiosity");
    expect(roverElement).toBeInTheDocument();
});

test("renders Rover Page - redirect to Home", () => {
    render(<RoverWithRoute initialRoute={"/anything"} />);
    const roverElement = screen.getAllByText("Curiosity");
    expect(roverElement[0]).toBeInTheDocument();
});
