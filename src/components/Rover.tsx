import { useParams, Redirect } from 'react-router-dom';

interface RoverParams {
    rover: string;
}

export function Rover() {
    let { rover } = useParams<RoverParams>();
    const regexMatch = /(opportunity)|(spirit)|(curiosity)/i

    if(!rover.match(regexMatch)){
        return (
            <Redirect to="/" />
        )
    }

    rover = rover.substr(0, 1).toUpperCase() + rover.substr(1).toLowerCase();

    return (
        <div>
            {(rover.match(regexMatch)) && <h2>Hello {rover}</h2>}
        </div>
    )
}
