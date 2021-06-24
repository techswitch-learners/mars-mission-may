import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { Gallery } from "./Gallery";
import { PhotoDetails, getRoverImages } from "../api/NasaApi";

interface RoverParams {
    rover: string;
}

export function Rover() {
    let { rover } = useParams<RoverParams>();
    const regexMatch = /(opportunity)|(spirit)|(curiosity)/i;

    const [photoSelectedId, setPhotoSelectedId] = useState<number>(0);
    const [allPhotoData, setAllPhotoData] = useState<PhotoDetails[]>([]);

    useEffect(() => {
        if (rover.match(regexMatch)) {
            getRoverImages(rover).then(images => setAllPhotoData(images));
        }
    }, [rover]);

    if (!rover.match(regexMatch)) {
        return (
            <Redirect to="/" />
        );
    }

    rover = rover.substr(0, 1).toUpperCase() + rover.substr(1).toLowerCase();

    return (
        <div>
            <h2 className='current-page'>Hello {rover}</h2>
            <div> Rover description card </div>
            <div> Large photo card </div>
            <Gallery
                allPhotoData={allPhotoData}
                photoSelectedId={photoSelectedId}
                setPhotoSelectedId={setPhotoSelectedId} />
        </div>
    );
}