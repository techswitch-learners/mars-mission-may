import { useParams, Redirect } from 'react-router-dom';

interface RoverParams {
    rover: string;
}

export function Rover() {
    let  { rover } = useParams<RoverParams>();
    rover = rover.substr(0,1).toUpperCase()+rover.substr(1);
    const RegexMatch = /(opportunity)|(spirit)|(curiosity)/i

    return (
        <div>
            {(rover.match(RegexMatch)) ? <h2>Hello {rover}</h2> : <Redirect to="/" />}
        </div>
    )
}
