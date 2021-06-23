import { render, screen } from '@testing-library/react';
import { Rover } from '../../components/Rover'
import { MemoryRouter, Route } from "react-router-dom"

interface RoverWithRouteProps {
    initialRoute: string;
}

function RoverWithRoute(props: RoverWithRouteProps) {
    return (
        <MemoryRouter initialEntries={[props.initialRoute]}>
            <Route path="/:rover">
                <Rover />
            </Route>
        </MemoryRouter>
    )
}

test('renders Rover Page', () => {
    render(<RoverWithRoute initialRoute={"/spirit"} />);

    const roverElement = screen.getByText("Hello spirit");

    expect(roverElement).toBeInTheDocument();
});

