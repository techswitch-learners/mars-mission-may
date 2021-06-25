import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { Gallery } from "./Gallery";
import { Card } from "./Card";
import { PhotoDetails, getRoverImages } from "../api/NasaApi";

interface RoverParams {
    rover: string;
    photoIdString: string;
}

export function Rover() {
    const [allPhotoData, setAllPhotoData] = useState<PhotoDetails[]>([]);
    const [selectedPhoto, setSelectedPhoto] = useState<PhotoDetails | undefined>(undefined);

    const { rover, photoIdString } = useParams<RoverParams>();
    const regexMatch = /(opportunity)|(spirit)|(curiosity)/i;
    const photoId = parseInt(photoIdString);

    useEffect(() => {
        if (rover.match(regexMatch)) {
            getRoverImages(rover).then(images => setAllPhotoData(images));
        }
    }, [rover]);

    useEffect(() => {
        const foundPhoto = allPhotoData.find(
            photoData => photoData.id === photoId
        );
        if (foundPhoto) {
            setSelectedPhoto(foundPhoto);
        }
    }, [photoIdString, allPhotoData]);

    if (!rover.match(regexMatch)) {
        return (
            <Redirect to="/" />
        );
    }

    const roverName = rover.substr(0, 1).toUpperCase() + rover.substr(1).toLowerCase();

    const pageContent = [
        <div key={rover}> Rover description card </div>
    ];

    if (selectedPhoto) {
        pageContent.push(
            <div className="large-card-container">
                <Card
                    imageSrc={selectedPhoto.imgSrc}
                    title="First Title"
                    body="body-text-body-text-body-text-body-text-body-text-body-text-body-text-"
                    href=""
                    showInitialText={true}
                    textHideable={false}
                    imageOnRight={false} />
            </div>);
    }

    pageContent.push(
        <Gallery
            rover={roverName}
            allPhotoData={allPhotoData}
            photoId={photoId} />
    );

    return (
        <div className="rover-page">
            {pageContent}
        </div>
    );
}