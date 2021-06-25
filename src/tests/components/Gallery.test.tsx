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
            <Route exact path="/:rover">
                <Rover />
            </Route> 
            <Route exact path="/:rover/:photoIdString">
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
    const roverElement = screen.getByTestId("spirit");
    const galleryElement = screen.getByTestId("thumbnail-gallery");
    expect(galleryElement).toBeInTheDocument();
    expect(roverElement).toBeInTheDocument();
});