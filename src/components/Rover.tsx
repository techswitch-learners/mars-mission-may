import { useParams, Redirect } from 'react-router-dom';

interface RoverParams {
    rover: string;
}

export function Rover() {
    const { rover } = useParams<RoverParams>();
    // const rover = 'spirit';
    const RegexMatch = /(opportunity)|(spirit)|(curiosity)/i

    return (
        <div>
            <h1>Hello Rover</h1>
            {(rover.match(RegexMatch)) ? <h2>Hello {rover}</h2> : <Redirect to="/" />}
        </div>
    )
}
