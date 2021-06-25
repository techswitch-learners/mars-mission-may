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

test("renders Rover Page - Opportunity", () => {
    render(<RoverWithRoute initialRoute={"/opportunity"} />);
    const roverElement = screen.getByTestId("opportunity");
    const galleryElement = screen.getByTestId("thumbnail-gallery");
    expect(galleryElement).toBeInTheDocument();
    expect(roverElement).toBeInTheDocument();
});

test("renders Rover Page - Curiosity", () => {
    render(<RoverWithRoute initialRoute={"/CURIOSITY"} />);
    const roverElement = screen.getByTestId("curiosity");
    const galleryElement = screen.getByTestId("thumbnail-gallery");
    expect(galleryElement).toBeInTheDocument();
    expect(roverElement).toBeInTheDocument();
});

test("renders Rover Page - redirect to Home", () => {
    render(<RoverWithRoute initialRoute={"/anything"} />);
    const roverElement = screen.getAllByText("Curiosity");
    expect(roverElement[0]).toBeInTheDocument();
});

test("renders Rover Page - Curiosity with selected image", () => {
    render(<RoverWithRoute initialRoute={"/curiosity/102848"} />);
    const largeCardElement = screen.getByTestId("large-card-container");
    expect(largeCardElement).toBeInTheDocument();
});