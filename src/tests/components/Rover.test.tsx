import { render, screen } from '@testing-library/react';
import { Rover } from '../../components/Rover';
import { MemoryRouter, Route } from "react-router-dom";
import { Home } from '../../components/Home';

interface RoverWithRouteProps {
    initialRoute: string;
}

function RoverWithRoute({ initialRoute }: RoverWithRouteProps) {
    return (
        <MemoryRouter initialEntries={[initialRoute]}>
            <Route path="/:rover">
                <Rover />
            </Route>
        </MemoryRouter>
    )
}

test('renders Rover Page', () => {
    render(<RoverWithRoute initialRoute={"/spirit"} />);

    const roverElement = screen.getByText("Hello Spirit");

    expect(roverElement).toBeInTheDocument();
});

test('renders Rover Page', () => {
    render(<RoverWithRoute initialRoute={"/opportunity"} />);

    const roverElement = screen.getByText("Hello Opportunity");

    expect(roverElement).toBeInTheDocument();
});

test('renders Rover Page', () => {
    render(<RoverWithRoute initialRoute={"/curiosity"} />);

    const roverElement = screen.getByText("Hello Curiosity");

    expect(roverElement).toBeInTheDocument();
});

test('renders Rover Page', () => {
    render(<MemoryRouter initialEntries={["/anything"]}>
        <Route path="/">
            <Home />
        </Route>
    </MemoryRouter>
    )
    const roverElement = screen.getByText("Home Page");
    expect(roverElement).toBeInTheDocument();
});

