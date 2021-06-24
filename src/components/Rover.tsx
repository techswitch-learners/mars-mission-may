import { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Gallery } from './Gallery';

interface RoverParams {
    rover: string;
}

export function Rover() {
    const [photoSelected, setPhotoSelected] = useState(null);
    let { rover } = useParams<RoverParams>();
    const regexMatch = /(opportunity)|(spirit)|(curiosity)/i;

    if(!rover.match(regexMatch)){
        return (
            <Redirect to="/" />
        );
    }

    rover = rover.substr(0, 1).toUpperCase() + rover.substr(1).toLowerCase();
    
    return (
        <div>
            <h2>Hello {rover}</h2>
            <div> Rover description card </div>
            <div> Large photo card </div>
            <Gallery photoSelected={photoSelected} setPhotoSelected={setPhotoSelected} />
        </div>
    );
}