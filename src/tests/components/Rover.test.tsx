import { render, screen, waitFor } from "@testing-library/react";
import { Rover } from "../../components/Rover";
import { MemoryRouter, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Home } from "../../components/Home";

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

test("renders Rover Page - Curiosity with large photo card when image selected", async () => {
    render(<RoverWithRoute initialRoute={"/curiosity"} />);

    await waitFor(() => {
        expect(screen.getAllByTestId("small-photo-link")[0]).toBeInTheDocument();
    });
    const smallPhotoElements = screen.getAllByTestId("small-photo-link");
    const smallPhotoElement = smallPhotoElements[0];

    userEvent.click(smallPhotoElement);

    await waitFor(() => {
        expect(screen.getByTestId("large-photo-card")).toBeInTheDocument();
    });
});
