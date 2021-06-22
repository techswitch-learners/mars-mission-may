import { useParams, Redirect } from 'react-router-dom';

interface RoverParams {
    rover: string;
}

export function Rover() {
    const { rover } = useParams<RoverParams>();

    const regexMatch = /(opportunity)|(spirit)|(curiosity)/i

    return (
        <div>
            {(rover.match(regexMatch)) ? <h2>Hello {rover}</h2> : <Redirect to="/" /> }
        </div>
    )
}
